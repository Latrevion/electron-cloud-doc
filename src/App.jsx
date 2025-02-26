// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3 bg-danger left-panel'>
          <h1>left</h1>
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>right</h1>
        </div>
      </div>
    </div>
  )
}

export default App
