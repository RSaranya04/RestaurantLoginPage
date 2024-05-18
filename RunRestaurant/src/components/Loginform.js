import logo from "../resources/images/logo.png";
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import '../styles/loginformStyles.css';
import { useState } from "react";

const Loginform = () => {

    let [username, setUsername] = useState("Saranya");
    let [password, setPassword] = useState();

    const buttonHandler = () => {
        console.log("clicked");
    }
    return (<div className="login-form-container">
        <div className='app-logo'>
            <img src={logo} alt="foodie-app" />
        </div>
        <h1>Sign In</h1>
        <p>{username}</p>
        <TextInput
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChangeHandler={setUsername}
        />
        <TextInput
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChangeHandler={setPassword}
        />
        <Button name="Add" type="submit"
            onClickHandler={buttonHandler} />
        <p className='forgot-password'>Forgot Password? <a href=''><b>click here</b></a></p>
    </div>)
}

export default Loginform;