import React, { useMemo } from 'react'

type MemoProps = {
  children: JSX.Element | JSX.Element[]
  dependencies?: any[]
}

const Memo = ({ dependencies = [], children }: MemoProps) => {
  return useMemo(() => {
    return <>{children}</>
  }, dependencies)
}

export default Memo
