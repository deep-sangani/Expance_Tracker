import { createContext, useState,useEffect } from "react"
import TransactionList from "../componants/TransactionList";





const GlobelContext = createContext({});


export const GlobelProvider = ({ children }) => {
    
    
    
     
    


    const [initState, setState] = useState({
        Transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
        ],

    })
   
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("transactions"))
     setState(data!==null?data:{Transactions:[{ id: 1, text: "demo", amount: 0},]})
    console.log(JSON.parse(localStorage.getItem("transactions")))
     }, [])



    const deleteTransaction = (key) => {
       if(initState.Transactions!==null){
        var arr = initState.Transactions.filter(transaction => transaction.id !== key)
        
        setState({ Transactions: arr })
        console.log(initState.Transactions)
        localStorage.setItem("transactions",JSON.stringify({Transactions:arr}))
       }
      


    }

    const insertTransaction = (transaction)=>{
        var arr = initState.Transactions;
        arr.push(transaction)
        console.log(arr)
        setState({Transactions:arr})
        localStorage.setItem("transactions",JSON.stringify(initState))
        
       
        
        
    }
 

    return (
        <GlobelContext.Provider
            value={{ Transactions: initState.Transactions, deleteTransaction,insertTransaction }} >
            {children}

        </GlobelContext.Provider>
    )
}

export default GlobelContext;