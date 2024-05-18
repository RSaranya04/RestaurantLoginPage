import "../styles/buttonStyles.css";

const Button = ({name, type, onClickHandler}) => {
    return (<button onClick={onClickHandler} type={type} 
                    className="button-component">
        {name}
    </button>)
}

export default Button;
