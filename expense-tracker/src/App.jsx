
import {useState, useEffect} from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"


const App = () => {

  const [expenses, setExpenses] = useState(() => {
  const savedExpenses = localStorage.getItem ("expenses") ;
  return savedExpenses ? JSON.parse(savedExpenses) : [];
});

useEffect (() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);


const addExpense = (expense) => {
  setExpenses((prevExpenses) => [...prevExpenses, expense]);
};

const deleteExpenses = (index) => {
  setExpenses(expenses.filter((_, i) => i !== index));
};

const editExpense = (index) => {
  const updatedDescription = prompt("enter new description:", expenses[index].description);
  const updatedAmount = prompt("Enter new amount:", expenses[index].amount);
  const updatedDate = prompt("Enter new date:", expenses[index].date);

updatedDescription && updatedAmount && updatedDate ? setExpenses(expenses.map((expense,i) => 
i === index
? {description :updatedDescription, amount:parseFloat(updatedAmount), date:updatedDate} : expense
))
:null ;



};

const totalExpenses = expenses.reduce((total, exp) => total + parseFloat(exp.amount), 0);



  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm addExpense={addExpense} />
      <br/>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            - Ksh {exp.amount} ({exp.description}) [{exp.date}]
            <button className="btn-edit" onClick={() => editExpense(index)}>✏️Edit</button>
            <button className="btn-delete" onClick={() => deleteExpenses(index)}>🗑️Delete</button>
          </li>
        ))}
      </ul>

      <h3>Total Expenses: Ksh {totalExpenses}</h3>
    </div>
  );
};

export default App
