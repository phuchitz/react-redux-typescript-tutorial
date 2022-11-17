import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch();

  const { depositMoney, WithdrawMoney, Bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <div className="App">
        <h1>{amount}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => WithdrawMoney(500)}>Withdraw</button>
        <button onClick={() => Bankrupt()}>Bankrupt</button>
      </div>
    </>
  );
}

export default App;
