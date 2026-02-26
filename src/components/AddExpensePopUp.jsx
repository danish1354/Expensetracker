import React, { useState } from 'react'
import Popup from './Popup'

export default function AddExpensePopUp({ onAddExpense, onClose }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense({
      id: Date.now(),
      name,
      date,
      category,
      amount,
    });
    setName("");
    setDate("");
    setCategory("");
    setAmount("");
  };
  return (
    <div>
      <Popup title="Add Expense" onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <label>Expense Name</label>
          <input
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button type="submit">+ Add Expense</button>
        </form>
      </Popup>
    </div>
  );
}
