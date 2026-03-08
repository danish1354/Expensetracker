import React from "react";

export default function ExpenseTable({
  expenses,
  onAddEditClick,
  onDeleteClick,
}) {
  console.log("exporesnse", expenses);
  return (
    <div className="tableContainer">
      <table className="expenseTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Expenses</th>
            <th>category</th>
            <th>Amount</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>

                <td>{item.name}</td>
                <td>{item.category}</td>

                <td>₹{item.amount}</td>

                <td>
                  <button
                    className="editBtn"
                    onClick={() => onAddEditClick(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="deleteBtn"
                    onClick={() => onDeleteClick(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
