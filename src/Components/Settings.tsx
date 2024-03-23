import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Settings.modules.css';
import learning_icon from '../Images/Learning_Icon.png'
import profile_icon from '../Images/profile_icon.png'
import help_center_icon from '../Images/help_center_icon.png'
import setting_selected_icon from '../Images/setting_selected_icon.png'
import theme_icon from '../Images/theme_icon.png'
import inventory_icon from '../Images/inventory_icon.png'
import logout_icon from '../Images/logout_icon.png'

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
    SettingsHandler:() => void;
}

function Settings({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    ProgressHandler,
                    InventoryHandler,
                    backToHomeHandler,
                    SettingsHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <div className="blue-half" style={{ width: '20%', height: '100%', backgroundColor: '#3127A0', position: 'fixed', left: 0}}>
                <div id="website-title">Website.com</div>
                <button id="sidebar-learning-progress-button" onClick={ProgressHandler}>
                    <img src={learning_icon} alt="Learning icon"/>
                    Learning Progress
                </button>
                <button id="sidebar-profile-button" onClick={ProfileHandler}>
                    <img src={profile_icon} alt="Profile Icon"/>
                    Profile
                </button>
                <button id="sidebar-help-center-button">
                    <img src={help_center_icon} alt="Help Center Icon"/>
                    Help Center
                </button>
                <button id="sidebar-selected-setting-button" onClick={SettingsHandler}>
                    <img src={setting_selected_icon} alt="Setting Icon"/>
                    Setting
                </button>
                <button id="sidebar-theme-button">
                    <img src={theme_icon} alt="Theme Icon"/>
                    Theme
                </button>
                <button id="sidebar-inventory-button" onClick={InventoryHandler}>
                    <img src={inventory_icon} alt="Selected Inventory Icon"/>
                    Inventory
                </button>
                <div id="separation-line"></div>
                <button id="sidebar-logout-button" onClick={getStartedHandler}>
                    <img src={logout_icon} alt="Logout Icon"/>
                    Log out
                </button>
            </div>

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <div className="page-title">
                    <span id="page-title-button" onClick={backToHomeHandler}>Homepage {'>'} </span>
                    <span id="page-title-button" onClick={SettingsHandler}> Settings </span>
                </div>
                <div id="top-buttons">
                    <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="info-button" onClick={contactHandler}> Contact </button>
                    <button className="info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>
                <div id="userinfo">User Information</div>
                <div id="about-me-form">
                    <form>
                        <div id="sign-up-fields">
                            <div id="float-left">
                                <label htmlFor="settings-first-name">First name</label><br />
                                <input type="text" className="settings-name" name="settings-first-name"/>
                            </div>
                            <div id="float-right">
                                <label htmlFor="settings-last-name" >Last name</label><br />
                                <input type="text" className="settings-name" name="settings-last-name"/>
                            </div>
                        </div>
                        <label htmlFor="emailaddress"> Email</label><br />
                        <input type="text" id="settings-emailaddress" name="email-address"/><br />
                        <label htmlFor="pass-word"> About</label><br />
                        <input type="text" id="settings-about" name="about" /><br />
                            
                    </form>
                </div>
                <div id='change-password'>Change Password</div>
                <div id="change-and-confirm">
                    <form>
                        <label htmlFor="changePassword"> Change Password</label><br />
                        <input type="text" id="change-input" name="changePassword" /><br />

                        <label htmlFor="currentPassword"> Current Password</label><br />
                        <input type="text" id="current-input" name="currentPassword" /><br />

                        <label htmlFor="confirmPassword"> Confirm Password</label><br />
                        <input type="text" id="confirm-input" name="confirmPassword" /><br />
                    </form>
                </div>

                <div id="noti">
                    <div id="notifications">Notifications</div>
                    <div className="not-black-text">Enable Desktop Notifications</div>
                    <div className="not-grey-text">If you’re looking forward for our updates, right-click the button </div>
                    <div className="not-black-text">Enable Email Notifications</div>
                    <div className="not-grey-text">Receive emails for messages</div>
                </div>
            </div>
        </div>
    );
}

export default Settings;