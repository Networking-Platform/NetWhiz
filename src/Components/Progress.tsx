import '../Styles/Progress.modules.css';
import transition_arrow from '../Images/progress_transition_arrow.png'
import progress_checkmark from '../Images/progress_checkmark.png'
import selected_learning_icon from '../Images/progress_selected_icon.png'
import profile_icon from '../Images/profile_icon.png'
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
}

function Progress({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    InventoryHandler,
                    ProgressHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <div className="blue-half" style={{ width: '20%', height: '100%', backgroundColor: '#3127A0', position: 'absolute', left: 0 }}>
                <div id="website-title">Website.com</div>
                <button id="sidebar-selected-learning-progress-button" onClick={ProgressHandler}>
                    <img src={selected_learning_icon} alt="Learning icon"/>
                    Learning Progress
                </button>
                <button id="sidebar-profile-button" onClick={ProfileHandler}>
                    <img src={profile_icon} alt="Selected Profile Icon"/>
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
                <button id="sidebar-logout-button">
                    <img src={logout_icon} alt="Logout Icon"/>
                    Log out
                </button>
            </div>

            <div className="white-half">

                <div id="profile-title">Homepage {'>'} Progress</div>
                <div id="profile-top-buttons">
                    <button className="profile-info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="profile-info-button" onClick={contactHandler}> Contact </button>
                    <button className="profile-info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="profile-info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>
                
                <div id = "progress-text">15% complete</div>
                <div id = "white-bar"></div>
                <div id = "blue-bar"></div>

                <div id = "status-circle"></div>
                <div id = "status-text">Current Status</div>
                <div id = "status-level">Beginner</div>

                <div id = "lesson0-box">
                    <div id = "current-border"></div>
                    <div id = "current-border2"></div>
                    <div id = "lesson-text">LESSON 0</div>
                    <div id = "lesson-name">Tutorial</div>
                    <div id = "current-circle">
                        <div id = "checkmark">
                            <img src={progress_checkmark} alt="checkmark"></img>
                        </div>
                    </div>
                    <div id = "down-arrow"></div>
                </div>
                
                <div id = "lesson1-box">
                    <div id = "current-border"></div>
                    <div id = "current-border2"></div>
                    <div id = "lesson-text">LESSON 1</div>
                    <div id = "lesson-name">"Topic"</div>
                    <div id = "down-arrow"></div>
                </div>

                <div id = "transition-arrow">
                    <img src = {transition_arrow} alt="Transition Arrow"></img>
                </div>
            </div>
        </div>
    );
}

export default Progress;