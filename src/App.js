import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UserInfo from './embededwidget.js';

function App() {


  const [count, setCount] = useState({title:'',price:'',category:'',id:''});
  const [message, setmessage] = useState('message');

  const [message2, setmessage2] = useState('messag2');

  const changeMessage = React.useCallback(
    (data) => {
      setmessage('new mesaage '+data)
    },
    [message]
);


React.useEffect(() => {
  setmessage('new mesaage')
}, []);

React.useEffect(() => {
    let result = fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>{
      setCount(json);
    })
  }, []);

 
  //result(data);
console.log(count);
  const config = {
    name : count?.title,
    price: count?.price,
    currency: count?.category,
    id:count?.id
    };

    
  return (
    <div className="App">
      <header className="App-header">
      <h1>{ message} </h1>
      <button onClick={() => changeMessage('22')}> Click</button>
      <h1>{ message2} </h1>
        <UserInfo config={{name : count?.title,price: count?.price,currency: count?.category,id:count?.id}} />
      </header>
    </div>
  );
}

export default App;
