import React from 'react'
import ReactDOM from 'react-dom'
import Entry from './components/entry/entry'
import './index.css'
import './styles/tailwind.generated.css'

const App = () => {
  return (
    <div className='h-full w-full'>
      <Entry />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
