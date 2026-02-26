import React, { useState } from 'react'
import Popup from './Popup';

export default function AddBudgetPopUp(onClose, onAddBudget) {
    const [amount, setAmount] = useState("");

    const handleSumbit = (e) => {
      e.preventDefault();

      onAddBudget(numbers(amount));
      {
        setAmount("");
      }
    };


    
  return (
    <div>
      <Popup title="Add Budget" onClose={onClose}>
        <form onSubmit={handleSumbit}></form>
        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">+ Add budget</button>
      </Popup>
    </div>
  );
}
