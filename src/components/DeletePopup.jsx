// import React from "react";
// import Popup from "./Popup";

// export default function DeletePopup({ onClose,onConfirm }) {
//   return (
//     <Popup title="Delete Expense" onClose={onClose}>
//       <p>Are you sure you want to delete this expense?</p>

//       <button onClick={onClose}>Cancel</button>
//       <button onClick={onConfirm}>Delete</button>
//     </Popup>
//   );
// }
import React from "react";
import Popup from "./Popup";

export default function DeletePopup({ onClose, onConfirm }) {
  return (
    <Popup title="Delete Expense" onClose={onClose}>
      <p className="delete-popup__text">
        Are you sure you want to delete this expense?
      </p>

      <div className="delete-popup__actions">
        <button className="delete-popup__cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="delete-popup__delete" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </Popup>
  );
}