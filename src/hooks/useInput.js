import { useState } from 'react'

export default function useInput(initialState) {
  const [value, setValue] = useState(initialState)

  const onChange = ({ target: { value: inputVal } }) => {
    setValue(inputVal)
  }

  return { value, onChange }
}