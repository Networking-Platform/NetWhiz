import HappyBunchChat from '../Images/Happy Bunch Chat.png';
import user_4_fill from '../Images/user_4_fill.png';
import '../Styles/ContactUs.modules.css';
import '../Styles/Navigation.css';

interface Props {
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
}

function ContactUs({aboutUsHandler, contactHandler, FAQHandler}: Props) {
    return (
        <div>
            <div id="top-buttons">
                <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                <button className="info-button" onClick={contactHandler}> Contact </button>
                <button className="info-button" onClick={FAQHandler}> FAQ </button>
            </div>
            <div id="website-title-cu">Website.com</div>
            <div id="contact-us"> Contact Us </div>
            <div id="words">
                LET'S CONNECT! We're here to help and would love to hear from you! Whether you have questions, comments, suggestions, or just want to chat, you can reach out to us via the contact form on this page.
            </div>

            <div id="talk-to-us">
                <form>
                    <div id="name-fields">
                            
                        <input type="text" id="firstname" name="firstname" placeholder="First name"/>
                            
                        <input type="text" id="lastname" name="lastname" placeholder="Last name"/><br />

                            
                        <input type="text" id="email-address" name="email-address" placeholder="Email address"/><br />
                    </div>
                
                    <input type="text" id="content" name="content" placeholder="What do you want to talk to us..." /><br />

                    <button type="submit" id="submit"> Submit </button>
                    
                </form>
            </div>
            <img id="icon" src={user_4_fill} alt="user icon" />
            <img id="hbc" src={HappyBunchChat} alt="contact page image" />
        </div>
    )
}

export default ContactUs;