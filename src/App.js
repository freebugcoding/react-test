import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const baseUrl = '/';
  const [input, setInput] = useState(null)
  const [messages, setMessages] = useState([]);

  const saveMessage= (input) => {axios.post(baseUrl, {
    data: input
  }).then((res)=> setMessages([...messages, res.data.data]))}

  const getMessages = () => {axios.get("http://localhost:8080/").then((res)=> {console.log(res.data); setMessages([...res.data.map(data => data.data)]);})}

  useEffect(() => {
    getMessages();
  }, [])


  return (<div>
    <div className="App">
      <input value={input} onChange={ e => setInput(e.target.value) } />
      <button onClick={()=> saveMessage(input)}>save</button>
    </div>
    <div>
      <table>
        {messages.map(m => (<tr><th>{m}</th></tr>))}
      </table>
    </div>
    </div>
  );
}

export default App;
