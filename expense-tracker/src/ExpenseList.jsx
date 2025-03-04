import React from 'react'

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length >0 ? (
        <ul>
          {expenses.map((expense, index) => (
        <li key={index}>
          {expenses.description} - Ksh {expenses.amount} ({expenses.date})
        </li>
      ))}
      </ul>
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
}

export default ExpenseList
