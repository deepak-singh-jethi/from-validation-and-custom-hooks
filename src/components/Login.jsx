import { useRef} from "react";
import Input from "./Input";
import { isEmail,isNotEmpty,isEqualsToOtherValue,hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {

/* const email = useRef();
const password = useRef();
const [emailIsInvalid,setEmailIsInvalid] = false;

function handleSubmit(event){
  event.preventDefault();
  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;
  console.log(enteredEmail,enteredPassword);

const emailIsValid = enteredEmail.includes('@');
if(!emailIsValid){
  setEmailIsInvalid(true);
  return;
}
setEmailIsInvalid(false);
other code like fetching or post request



} */
const{value:emailValue,  handleInputChange:handleEmailChange, handleInputBlur:handleEmailBlur,hasError:emailIsInvalid} = useInput('',(value)=> isEmail(value) && isNotEmpty(value))


const{ value:passwordValue, handleInputChange:handlePasswordChange,handleInputBlur:handlePasswordBlur,hasError:passwordIsInvalid,} = useInput('',(value)=> hasMinLength(value, 6))



function handleSubmit(event){
event.preventDefault();

if(emailIsInvalid){
  return;
}

}




  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input label="Email" 
        id="email" 
        type = "email" 
        name = "email" 
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error= {emailIsInvalid && "Enter a correct Email"}
        ></Input>


      <Input label="Password" 
        id="password" 
        type = "password" 
        name = "password" 
         onChange={handlePasswordChange}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          error= {passwordIsInvalid && "Enter a correct Password"}
        ></Input>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
