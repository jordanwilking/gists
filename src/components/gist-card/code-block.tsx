import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Memo from '../memo/memo'

type CodeBlockProps = {
  fileName: string
  language: string
  content: string
}

/**
 * Displays the syntax-highlighted code blocks
 * Memo is used to reduce uneccessary rerenders caused by the library
 */
const CodeBlock = ({ fileName, language, content }: CodeBlockProps) => {
  return (
    <Memo dependencies={[fileName]}>
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        wrapLongLines
        style={nnfxDark}
        customStyle={{ margin: 0 }}
      >
        {content}
      </SyntaxHighlighter>
    </Memo>
  )
}

export default CodeBlock
