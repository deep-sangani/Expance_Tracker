import React, { useContext } from 'react'
import GlobelContext from "../context/GlobelContext"

export default function Tranaction({ transaction }) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobelContext)


    return (
        <>
            <li class={transaction.amount > 0 ? "plus" : "minus"}>
                {transaction.text}<div className="delete"><span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)} >x</button></div>
            </li>
        </>
    )
}
