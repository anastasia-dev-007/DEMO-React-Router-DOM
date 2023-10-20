import { useContext } from "react";
import { UserContext } from "../../App";

function WelcomeMessage(props) {
    //const user = valorile user din App.jsx
    const user = useContext(UserContext);
    console.log(user);
    
    return (
        <div>
             <h3>Welcome {user.firstName}!</h3>
             <p>Enjoy the app!</p>
        </div>
    );
}

export default WelcomeMessage;