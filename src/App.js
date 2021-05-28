import './App.css';
import { useEffect } from 'react'
import axios from 'axios'

const client_ID = '2cb94ebe7e5c4f139c02692a872022ff'
const authURL = 'https://accounts.spotify.com/authorize'

function App() {

  const fetchData = async () => {
      const data = await axios.get(`${ authURL }?client_id=${ client_ID }&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`)

      console.log(data)
  }

  return (
    <div className="App">
      <button onClick={fetchData}>Login</button>
    </div>
  );
}

export default App;