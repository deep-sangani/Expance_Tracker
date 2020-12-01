import './App.css';
import AddTransaction from './componants/AddTransaction';
import Balance from './componants/Balance';
import Header from './componants/Header';
import IncomeExpenses from './componants/IncomeExpenses';
import TransactionList from './componants/TransactionList';
import {GlobelProvider} from "./context/GlobelContext"
function App() {
  

  return (
    <GlobelProvider >
   <Header/>
   <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
   </div>
   </GlobelProvider>
  );
}

export default App;
