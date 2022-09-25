import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h3>Name: {props.name}</h3>
      <p>email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>INCREASE</button>
      <button onClick={decreaseCount}>DECREASE</button>
    </div>
  )
}

/*
const products = [
    { name: 'laptop', price: 120000 },
    { name: 'phone', price: 150000 },
    { name: 'watch', price: 2000 },
    { name: 'tablet', price: 10000 },
  ]
*/

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="laptop" price="300000"></Product>
// <Product name="phone" price="150000"></Product>
function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
