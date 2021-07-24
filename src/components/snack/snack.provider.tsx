import React, { createContext, useState, useEffect, useMemo } from 'react'
import Button from '@material-ui/core/Button'
import SnackBar, { SnackbarProps } from '@material-ui/core/Snackbar'
import Alert, { AlertProps } from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Portal from '@material-ui/core/Portal'

type AddSnack = (message: string, props?: SnackProps) => void

type Snack = {
  message?: string
} & SnackProps

export type SnackProps = {
  status?: AlertProps['severity'] // determines the style of the snackbar
  closeable?: boolean // whether the snackbar is manually closeably
  clickawayCloseable?: boolean // whether the snackbar can be closed by clickaway
  timeout?: number // custom timeout before snackbar disappears
  undo?: () => void // method for undoing the snackbar action
  retry?: () => void // method for retrying the snackbar action
  snackBarProps?: SnackbarProps
  alertProps?: AlertProps
  permanent?: boolean // disables the timeout, forces closeable
}

const AUTO_DISMISS = 5000

// Gives the addSnack function the correct type signature
export const SnackBarContext = createContext<AddSnack>({} as AddSnack)

/**
 * Globally manages snackbars and provides a method for adding them to the queue
 */
export function SnackProvider({ children }: { children: React.ReactNode }) {
  const [snacks, setSnacks] = useState([] as Snack[])
  const [currentSnack, setCurrentSnack] = useState({} as Snack)

  const addSnack = (message: string, props: SnackProps = {}) => {
    setSnacks((snacks) => [{ message, ...props }, ...snacks])
  }

  // Set current snack to be displayed
  useEffect(() => {
    if (snacks.length > 0) {
      setCurrentSnack(snacks[snacks.length - 1])
    }
  }, [snacks])

  // Remove snack after timeout
  useEffect(() => {
    if (currentSnack.message && !currentSnack.permanent) {
      const timeout = currentSnack.timeout || AUTO_DISMISS

      const timer = setTimeout(() => {
        removeCurrentSnack()
      }, timeout)

      return () => clearTimeout(timer)
    }

    return
  }, [currentSnack])

  const handleClose = (_e: any, reason?: string) => {
    if (
      (reason === 'clickaway' && currentSnack.clickawayCloseable) ||
      reason !== 'clickaway'
    ) {
      removeCurrentSnack()
    }
  }

  const handleUndo = () => {
    currentSnack?.undo()
    removeCurrentSnack()
  }

  const handleRetry = () => {
    currentSnack?.retry()
    removeCurrentSnack()
  }

  const removeCurrentSnack = () => {
    setCurrentSnack({})
    setSnacks((snacks) => snacks.slice(0, snacks.length - 1))
  }

  const Actions = () => {
    return (
      <>
        {undo && (
          <Button
            color='inherit'
            size='small'
            style={{ fontSize: '.75rem' }}
            onClick={handleUndo}
          >
            undo
          </Button>
        )}
        {retry && (
          <Button
            color='inherit'
            size='small'
            style={{ fontSize: '.75rem' }}
            onClick={handleRetry}
          >
            retry
          </Button>
        )}
        {(closeable || permanent) && (
          <IconButton
            style={{ padding: '3px' }}
            color='inherit'
            onClick={handleClose}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        )}
      </>
    )
  }

  const value = useMemo(() => addSnack, [])

  const {
    message,
    status,
    closeable,
    permanent,
    retry,
    undo,
    snackBarProps,
    alertProps,
  } = currentSnack

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {message && (
        <Portal>
          <SnackBar
            key={message}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={true}
            onClose={handleClose}
            {...snackBarProps}
          >
            <Alert
              style={{
                minWidth: '18rem',
                alignItems: 'center',
              }}
              action={<Actions />}
              severity={status}
              {...alertProps}
            >
              {message}
            </Alert>
          </SnackBar>
        </Portal>
      )}
    </SnackBarContext.Provider>
  )
}
