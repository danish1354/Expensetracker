import React from "react";

export default function ExpenseTable({ expenses }) {
  return (
    <div className="tableContainer">
      <table className="expenseTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Expenses</th>
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

                <td>₹{item.amount}</td>

                <td>
                  <button className="editBtn">✏ Edit</button>

                  <button className="deleteBtn">🗑 Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
