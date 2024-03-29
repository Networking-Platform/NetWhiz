import '../Styles/Inventory.modules.css';
import '../Styles/View.modules.css';
import learning_icon from '../Images/Learning_Icon.png'
import profile_icon from '../Images/profile_icon.png'
import help_center_icon from '../Images/help_center_icon.png'
import setting_icon from '../Images/setting_icon.png'
import theme_icon from '../Images/theme_icon.png'
import selected_inventory_icon from '../Images/inventory_selected_icon.png'
import logout_icon from '../Images/logout_icon.png'
import blue_jay from '../Images/blue_jay_view.png'
import Navigation from './utils/Navigation';

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    ViewHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler: () => void;
}

function View({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler, 
                    ViewHandler,
                    InventoryHandler,
                    backToHomeHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <div className="blue-half" style={{ width: '20%', height: '100%', backgroundColor: '#3127A0', position: 'fixed', left: 0}}>
                <div id="website-title">Website.com</div>
                <button id="sidebar-learning-progress-button">
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
                <button id="sidebar-setting-button">
                    <img src={setting_icon} alt="Setting Icon"/>
                    Setting
                </button>
                <button id="sidebar-theme-button">
                    <img src={theme_icon} alt="Theme Icon"/>
                    Theme
                </button>
                <button id="sidebar-selected-inventory-button">
                    <img src={selected_inventory_icon} alt="Selected Inventory Icon"/>
                    Inventory
                </button>
                <div id="separation-line"></div>
                <button id="sidebar-logout-button" onClick={getStartedHandler}>
                    <img src={logout_icon} alt="Logout Icon"/>
                    Log out
                </button>
            </div>

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <Navigation 
                    aboutUsHandler={aboutUsHandler}
                    contactHandler={contactHandler}
                    FAQHandler={FAQHandler}
                    profileHandler={ProfileHandler}
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Inventory', page_handler: InventoryHandler },
                            { page_name: 'View', page_handler: ViewHandler }
                        ]} 
                />
                
                
                <div id="showcase-box">
                    <img src={blue_jay} alt="Blue Jay View"/>
                    <div id="view-name">Blue Jay</div>
                    <div id="view-description">"Hey there! Fancy meeting you here. I'm a blue jay, always on the lookout for curious soulslike you. Enjoy your stay!"</div>
                </div>
                <div id="acquistion-text">Acquisition conditions</div>
                <div id="acquistion-box">
                    <div id="acquistion-description">Click the bird during the first lesson</div>
                </div>
            </div>
        </div>
    );
}

export default View;