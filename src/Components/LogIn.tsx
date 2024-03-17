import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import '../Styles/login.modules.css';

interface Props {
    backToHomeHandler: () => void;
}

function LogIn({backToHomeHandler}: Props) {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh', // Set body height to fill the viewport
            background: 'linear-gradient(to right, #6358DC 50%, white 50%)' // Create a linear gradient background
          }}>
            <div className="blue-half">
                <img id="wireframe" src={HumaaansWireframe} alt="login image" />
            </div>

            <div className="white-half">
                <button id='back' onClick={backToHomeHandler}>
                    &lt; Back
                </button>
                <div id="welcome">
                    Welcome to
                </div>

                <div id="website-name">
                    website
                </div>
                <div id="bottom-right-container">
                    <div id="account">
                        Account Log in
                    </div>

                    <div id="description">
                        If you are already a member you can login with your email address and password.
                    </div>

                    <div id="username-and-password">
                        <form>
                            <label htmlFor="username"> User name</label><br />
                            <input type="text" id="user-name" name="username" /><br />

                            <label htmlFor="password"> Password</label><br />
                            <input type="text" id="password" name="password" /><br />

                            <input type="checkbox" id="rememberme" defaultChecked />
                            Remember me <br />
                            <button type="submit" id="login"> Log In </button>
                        </form>
                    </div>
                    <div>
                        Don't have an account? <a href="/SignUp">Sign up here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;