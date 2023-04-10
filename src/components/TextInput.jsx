import React from 'react'

export default function TextInput({ label, name, id, value, type, onChange }) {
  return (
    <div className="w-full mt-3">
      <label className="block w-full ml-3 text-xs font-bold" htmlFor={name}>{label}</label>
      <input className="w-full py-2 px-3 border rounded-full border-gray-300" type={type} value={value} onChange={onChange} id={id} />
    </div>
  )
}

TextInput.defaultProps = {
  type: "text"
}
