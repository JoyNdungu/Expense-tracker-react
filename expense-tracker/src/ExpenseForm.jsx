import {useState} from "react";

const ExpenseForm = ({addExpense}) => {

const [description, setDescription] = useState("");
const[amount, setAmount] = useState("");
const [date, setDate] = useState("");

const handleSubmit = (e) => {
  e.preventDefault ();

  if (!description || !amount || !date) {
    alert("Please fill all fields");
    return;
  }

  const expense = {
    description,
    amount: parseFloat(amount), 
    date,
  };


console.log("Adding Expense:", expense);
addExpense(expense);

  setDescription("");
  setAmount("");
  setDate("");
};

  return (
   <form onSubmit={handleSubmit}>
    <input
    className="description"
    type="text"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}/>

<input
className="amount"
type="number"
placeholder="Amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}/>


<input 
className="date"
type="date"
value={date}
onChange={(e) =>setDate(e.target.value)}/>

<button 
className="btn-submit"
type="submit">{description && amount && date ? "Add Expense" : "Fill all fields"}</button>

   </form>
  );
}

export default ExpenseForm
