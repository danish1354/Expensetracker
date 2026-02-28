import React, { useState } from "react";
import Popup from "./Popup";

export default function AddBudgetPopUp({ onClose, onAddBudget }) {
  const [amount, setAmount] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (amount == "") {
      alert("enter amount");
    }

    onAddBudget(Number(amount));
    {
      setAmount("");
    }
  };

  return (
    <Popup title="Add Budget" onClose={onClose}>
      <form className="form" onSubmit={handleSumbit}>
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
          + Add Budget
        </button>
      </form>
    </Popup>
  );
}
