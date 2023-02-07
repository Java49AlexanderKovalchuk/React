import React from 'react';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { useSelector } from 'react-redux';
import { Input } from './components/Input';

function App() {
  const userName: string = useSelector<any, string>(state => state.auth.authenticated);
  const [operand, setOperand] = React.useState(1);
  const [factor, setFactor] = React.useState(10);

  function includeSubstring(str: string): boolean {
    return str.includes("admin");
  }
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {(userName) && <div>
      <p>username: {userName}</p>
      <Input placeHolder={'Enter operand'} inputProcess={function (value: string): string {
        setOperand(+value);
        return '';
      }} ></Input>
      <Input placeHolder={'Enter factor'} inputProcess={function (value: string): string {
        setFactor(+value);
        return '';
      }}></Input>
    </div>}
    {(userName) && <div>
      <CounterUpdater operand={operand}></CounterUpdater>
      <CounterSquare></CounterSquare>
      <CounterMultiply factor={factor}></CounterMultiply>
    </div>}
    {(userName) && <Logout></Logout>}
    {(!userName) && <Login valid={includeSubstring}></Login>}
  </div>

}
export default App;