import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { bindActionCreators } from 'redux'
import { actionCreaters } from '../state/index'


const Shop = () => {
  const dispatch = useDispatch()
//   const actions = bindActionCreators(actionCreaters, dispatch);
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreaters, dispatch);  //avoid writing dispatch while calling a function
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
        {/* <button onClick={()=>{dispatch(actionCreaters.withdrawMoney(100))}} type="button" className="btn btn-primary mx-2">-</button>
        Update balance
        <button onClick={()=>{dispatch(actionCreaters.depositMoney(100))}} type="button" className="btn btn-primary mx-2">+</button> */}
        {/* <button onClick={()=>{actions.withdrawMoney(100)}} type="button" className="btn btn-primary mx-2">-</button>
        Update balance
        <button onClick={()=>{actions.depositMoney(100)}} type="button" className="btn btn-primary mx-2">+</button> */}
        <button onClick={()=>{withdrawMoney(100)}} type="button" className="btn btn-primary mx-2">-</button>
        Update balance
        <button onClick={()=>{depositMoney(100)}} type="button" className="btn btn-primary mx-2">+</button>
    
    </div>
  )
}

export default Shop