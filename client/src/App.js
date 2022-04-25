import React from 'react';
import './App.css';
import Register from './components/Register';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() =>{
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        hello :)
      <p>{!data ? "Loading..." : data}</p>
      <Register />
      </header>
    </div>
  );
}

export default App;
