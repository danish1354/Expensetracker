import React from 'react'

export default function Popup({ title, children, onClose })
{
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button
          onClick={() => {
            console.log("Closing");
            onClose();
          }}
        >
          X
        </button>
      </div>
      {/* entire form */}
      <div>{children}</div>
    </div>
  );
}
