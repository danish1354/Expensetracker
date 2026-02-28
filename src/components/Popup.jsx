// import React from 'react'

// export default function Popup({ title, children, onClose })
// {
//   return (
//     <div>
//       <div>
//         <h2>{title}</h2>
//         <button
//           onClick={() => {
//             console.log("Closing");
//             onClose();
//           }}
//         >
//           X
//         </button>
//       </div>
//       {/* entire form */}
//       <div>{children}</div>
//     </div>
//   );
// }
import React from "react";

export default function Popup({ title, children, onClose }) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>

          <button
            className="modal__close"
            onClick={() => {
              console.log("Closing");
              onClose();
            }}
          >
            ×
          </button>
        </div>

        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
