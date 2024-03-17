import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Profile.modules.css';
import edit_icon from '../Images/Edit_icon.png'
import learning_icon from '../Images/Learning_Icon.png'
import selected_profile_icon from '../Images/profile_selected_icon.png'
import help_center_icon from '../Images/help_center_icon.png'
import setting_icon from '../Images/setting_icon.png'
import theme_icon from '../Images/theme_icon.png'
import inventory_icon from '../Images/inventory_icon.png'
import logout_icon from '../Images/logout_icon.png'

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    InventoryHandler: () => void;
    ProgressHandler: () => void;
    backToHomeHandler:() => void;
}

function Profile({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    InventoryHandler,
                    ProgressHandler,
                    backToHomeHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <div className="blue-half" style={{ width: '20%', height: '100%', backgroundColor: '#3127A0', position: 'absolute', left: 0 }}>
                <div id="website-title">Website.com</div>
                <button id="sidebar-learning-progress-button" onClick={ProgressHandler}>
                    <img src={learning_icon} alt="Learning icon"/>
                    Learning Progress
                </button>
                <button id="sidebar-selected-profile-button" onClick={ProfileHandler}>
                    <img src={selected_profile_icon} alt="Selected Profile Icon"/>
                    Profile
                </button>
                <button id="sidebar-help-center-button">
                    <img src={help_center_icon} alt="Help Center Icon"/>
                    Help Center
                </button>
                <button id="sidebar-setting-button">
                    <img src={setting_icon} alt="Setting Icon"/>
                    Setting
                </button>
                <button id="sidebar-theme-button">
                    <img src={theme_icon} alt="Theme Icon"/>
                    Theme
                </button>
                <button id="sidebar-inventory-button" onClick={InventoryHandler}>
                    <img src={inventory_icon} alt="Inventory Icon"/>
                    Inventory
                </button>
                <div id="separation-line"></div>
                <button id="sidebar-logout-button" onClick={getStartedHandler}>
                    <img src={logout_icon} alt="Logout Icon"/>
                    Log out
                </button>
            </div>

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <div id="profile-background">
                    <div id="avatar"></div>
                    <div id="username">Kelvin</div>
                    <div id="bio">Hello, World!</div>
                    <button id="edit-button">
                        <img src={edit_icon} alt="Edit icon"/>
                        Edit
                    </button>
                </div>

                <div className="page-title">
                    <span id="page-title-button" onClick={backToHomeHandler}>Homepage {'>'} </span>
                    <span id="page-title-button" onClick={ProfileHandler}> Profile </span>
                </div>
                <div id="top-buttons">
                    <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="info-button" onClick={contactHandler}> Contact </button>
                    <button className="info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>

                <div id="info-slot-topleft">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Learning Progress</div>
                    <div id="info-slot-stats">5%</div>
                </div>
                <div id="info-slot-topright">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Has Focused</div>
                    <div id="info-slot-stats">100 Minutes</div>
                </div>
                <div id="info-slot-bottomleft">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Collections</div>
                    <div id="info-slot-stats">5</div>
                </div>
                <div id="info-slot-bottomright">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Current Status</div>
                    <div id="info-slot-stats">Beginner</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;