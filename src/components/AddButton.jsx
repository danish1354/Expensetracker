import React from 'react'

export default function AddButton({type, onClick}) {

  return (
      <button className="Button-Add" onClick={onClick}> + Add {type}</button>
  )
}
