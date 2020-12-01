import React,{useContext} from 'react'
import GlobelContext from "../context/GlobelContext"
export default function Balance() {
    const {Transactions} = useContext(GlobelContext)
     
    const amounts = Transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
    <h4>Your Balance</h4>
    <h1 id="balance">₹{total==NaN?0.00:total}</h1>
        </>
    )
}
