const FormLabelInputCreator = ({formData}) => {/* 

    const [state, setState] = useState(initialState); */
  // To use it we need a initial state and a State Hook initializated and imported
  
    const formFields = Object.entries(formData.initialState);
    const allFields = []
    
    // eslint-disable-next-line array-callback-return
    formFields.map((field) => {
        const words = field[0]
            .split('_')
            .map((eachWord) => eachWord[0].toUpperCase() + eachWord.slice(1))
            .join(' ');
        const fieldType = typeof field[1] === 'string' ? 'text' : typeof field[1];
        const newLabel = {
            label: words,
            type: fieldType,
            name: field[0]
        }
        allFields.push(newLabel)
    });
    return(
        allFields.map((eachField,i) => {
            return (
                <div key={`${eachField.name}_${i}`} className='formField'>
                    <label>{eachField.label}: </label>
                    <input
                        type={eachField.type}
                        name={eachField.name}
                        onChange={(e) =>
                            formData.setState({ ...formData.state, [e.target.name]: e.target.value })
                        }
                        value={[formData.state][eachField.name]}
                    />
                </div>
            );
        })
    )
}

export default FormLabelInputCreator