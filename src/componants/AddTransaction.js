import React,{useContext, useState} from 'react'
import GlobelContext from "../context/GlobelContext"

export default function AddTransaction() {
const [text,setText] = useState("")
const [amt,setAmt] = useState("")
const {insertTransaction} = useContext(GlobelContext)
const [type,setType] =useState("expense")
var num = null
const changesign=()=>{
  console.log(type)
  if(type==="expense"){
    
     num = amt*(-1)
    console.log(num)
    
  }
}

const handleinsertion =()=>{

  changesign()
  const obj = {
    id:parseInt((Math.random()*10)),
    text:text,
    amount:num?num:amt,
  }
setAmt("");
setText("");
 insertTransaction(obj)
}






    return (
        <>
    <h3>Add new transaction</h3>
   
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label >
           <div className="type">
          <span> <label>Expense</label>
            <input type="radio" name="type" value="expense" onClick={(e)=>setType(e.target.value)}/></span>
            <span><label>Income</label>
            <input type="radio" name="type" value="Income" onClick={(e)=>setType(e.target.value)}/></span>
           </div>
          <input type="number" placeholder="Enter amount..." value={amt} onChange={(e)=>setAmt(parseInt(e.target.value))} />
        </div>
        <button className="btn" onClick={()=>handleinsertion()}>Add transaction</button>
      
    
        </>
    )
}
