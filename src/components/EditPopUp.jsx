import React from 'react'
import Popup from './Popup'


export default function EditPopUp({ onAddEditClick, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <Popup title="Edit Expense" onClose={onClose}>
          <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="field__label">Expense Name*</label>
          <input className="field__input" type="text"></input>
        </div>
        <div className="form">
          <label className="field__label">Date*</label>
          <input className="field__input" type="date" />
        </div>
        <div className="form">
          <label className="field__label">Category*</label>
          <input className="field__input" type="text" />
        </div>

        <div className="form">
          <label className="field__label">Amount*</label>
          <input className="field__input" type="text" />
        </div>
        <button className="form__submit" type="submit">
          +Edit
        </button>
      </form>
    </Popup>
  );
}
