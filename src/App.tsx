import React from 'react';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { useSelector } from 'react-redux';

function App() {
  const auth: boolean = useSelector<any, boolean>(state => state.auth.authenticated); 

  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {auth && <div>
      <CounterUpdater></CounterUpdater>
      <CounterSquare></CounterSquare>
      <CounterMultiply></CounterMultiply>
    </div>}
    {auth && <Logout></Logout>}
    {!auth && <Login></Login>}
  </div>

}
export default App;