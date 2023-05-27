
function Input({name, type, label, onChange}) {

    const handleOnChange = (event) => {
        onChange(event.target.value)
    }


  return (
    <div>

    <label htmlFor={name}>{label} </label>
    <input name={name} type={type} onChange={handleOnChange}></input>


    </div>
  )
}

export default Input