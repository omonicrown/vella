import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import UserInfo from './embededwidget.js';

function App() {


  const [count, setCount] = useState([]);

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
    name : count.title,
    price: count.price,
    currency: count.category,
    id:count.id
    };

    
  return (
    <div className="App">
      <header className="App-header">
      
        <UserInfo config={config}/>
      </header>
    </div>
  );
}

export default App;
