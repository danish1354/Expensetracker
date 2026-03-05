import React, { useState } from "react";
import Popup from "./Popup";

export default function AddExpensePopUp({ onAddExpense, onClose }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("food");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || amount === "" || category.trim() === "") {
      alert("Enter Details");
    } else {
      onAddExpense({
        id: Date.now(),
        name,
        date,
        category,
        amount,
      });
    }
    setName("");
    setDate("");
    setCategory("");
    setAmount("");
    console.log(category);
  };

  return (
    <Popup title="Add Expense" onClose={onClose}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="field__label">Expense Name*</label>
          <input
            className="field__input"
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field__label">Date*</label>
          <input
            className="field__input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field__label">Category*</label>
          <select
            className="field__input"
            type="text"
            placeholder="Choose a Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Foods & Drink</option>
            <option>Groceries</option>
            <option>Travel</option>
            <option>Health</option>
          </select>
        </div>

        <div className="field">
          <label className="field__label">Amount*</label>
          <input
            className="field__input"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="form__submit" type="submit">
          + Add Expense
        </button>
      </form>
    </Popup>
  );
}
