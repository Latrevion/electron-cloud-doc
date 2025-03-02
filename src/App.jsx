// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FileSearch from "./components/FileSearch";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-light left-panel">
          <FileSearch title="我的云文档" onFileSearch={() => {}}></FileSearch>
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
