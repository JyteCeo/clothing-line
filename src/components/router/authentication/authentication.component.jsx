import Signup from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form copy/sign-in-form.component";
import  './authentication.styles.scss';

const Authentication = () => {

  
  

    return (
        <div className="authentication-container">
            <SignInForm />
            <Signup />
           
        </div>
    )
}

export default Authentication;