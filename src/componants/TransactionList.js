import React,{useContext} from 'react'
import GlobelContext from "../context/GlobelContext"
import Tranaction from './Tranaction'

export default function TransactionList() {
    const {Transactions} = useContext(GlobelContext)
    
    return (
        <>
            
      <h3>History</h3>
      <ul id="list" className="list">
          {
              Transactions.map((transaction,key)=>{
              return  <Tranaction transaction={transaction} key={transaction.id}/>
              })
          }
       
      </ul>
        </>
    )
}
