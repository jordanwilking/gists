import { useContext } from 'react'
import { SnackBarContext } from './snack.provider'

const useSnack = () => useContext(SnackBarContext)

export default useSnack
