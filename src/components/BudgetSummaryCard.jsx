
import React from "react";

export default function BudgetSummaryCard({ title, amount }) {
  return (
    <div className="budgetCard">
      <p className="budgetCard__title">{title}</p>
      <h3 className="budgetCard__amount">₹{amount.toLocaleString()}</h3>
    </div>
  );
}
