
import React from "react";

export default function AddButton({ type, onClick }) {
  return (
    <button className="btnPrimary" onClick={onClick}>
      + Add {type}
    </button>
  );
}
