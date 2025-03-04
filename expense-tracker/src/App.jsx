
import {useState} from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"


const App = () => {

  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]); 
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm addExpense={addExpense} />
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            - Ksh {exp.amount} ({exp.description})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
