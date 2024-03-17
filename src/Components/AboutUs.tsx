import '../Styles/AboutUs.modules.css';
import user_4_fill from '../Images/user_4_fill.png';
import '../Styles/Navigation.css';
import money_verse from '../Images/Moneyverse Crypto Galaxy.png';
import palz_plant from '../Images/Palz Plant Green Leaves.png';
import palz_plant2 from '../Images/Palz Plant 2.png';
import placeholder from '../Images/Rectangle 343.png';
interface Props {
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
}

function AboutUs({aboutUsHandler, contactHandler, FAQHandler}: Props) {
    return ( 
        <div>
            <div id="top-white-section">
                <div id="top-buttons">
                    <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="info-button" onClick={contactHandler}> Contact </button>
                    <button className="info-button" onClick={FAQHandler}> FAQ </button>
                </div>
                <div id="website-title-cu">Website.com</div>
                <div id="about-us"> About Us </div>
                <div id="abu-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <img id="icon" src={user_4_fill} alt="user icon" />
                <img id="moneyVerse" src={money_verse} alt="about us image"/>
                <img id="palzplant" src={palz_plant} alt="palz plant image"/>
                <img id="palzplant2" src={palz_plant2} alt="palz plant 2 image"/>
            </div>
            <div id="bottom-blue-section">
                <div id="meetus"> Meet Out Team Members</div>
                <div id="profileimage-container">
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                    <img className="grid-item" src={placeholder} alt="placeholder image"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;