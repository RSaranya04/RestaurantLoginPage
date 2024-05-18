import '../styles/inputStyles.css';
const TextInput = ({type, name, 
    placeholder, value, 
    onChangeHandler}) => {
    return (
    <input type={type} 
    name={name}
    className='input-text' 
    placeholder={placeholder}
    value={value}
    onChange={(event) => {
        let value = event.target.value;
        onChangeHandler(value);
    }}
    ></input>)
}

export default TextInput;