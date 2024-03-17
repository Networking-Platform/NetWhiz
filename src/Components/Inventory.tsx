import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Inventory.modules.css';
import learning_icon from '../Images/Learning_Icon.png'
import profile_icon from '../Images/profile_icon.png'
import help_center_icon from '../Images/help_center_icon.png'
import setting_icon from '../Images/setting_icon.png'
import theme_icon from '../Images/theme_icon.png'
import selected_inventory_icon from '../Images/inventory_selected_icon.png'
import logout_icon from '../Images/logout_icon.png'
import collection_icon from '../Images/collection_icon.png'
import blue_jay from '../Images/BlueJay.png'
import uncollected_parrot from '../Images/Uncollected_Parrot.png'

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    ViewHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
}

function Inventory({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    ProgressHandler,
                    InventoryHandler,
                    ViewHandler,
                    backToHomeHandler} : Props) {
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
                <button id="sidebar-setting-button">
                    <img src={setting_icon} alt="Setting Icon"/>
                    Setting
                </button>
                <button id="sidebar-theme-button">
                    <img src={theme_icon} alt="Theme Icon"/>
                    Theme
                </button>
                <button id="sidebar-selected-inventory-button" onClick={InventoryHandler}>
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
                <div className="page-title">
                    <span id="page-title-button" onClick={backToHomeHandler}>Homepage {'>'} </span>
                    <span id="page-title-button" onClick={InventoryHandler}> Inventory </span>
                </div>
                <div id="top-buttons">
                    <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="info-button" onClick={contactHandler}> Contact </button>
                    <button className="info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>
                <div id="top-area">
                    <div id="inventory-title2"> My Collections</div>
                    <div id="collection-progress">
                        <img src={collection_icon} alt="Collection Icon" className='badge-img'/>
                        <span className="progress-text"> Birds 2/40 </span>
                    </div>
                </div>

                <div className="collection-container">
                    <div className="collection-item">
                        <div className='name-text'>Blue Jay</div>
                        <img src={blue_jay} alt="Blue Jay" />
                        <div className='collection-status'>Collected</div>
                        <button className="view-text" onClick={ViewHandler} >View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Parrot</div>
                        <img src={uncollected_parrot} alt="Uncollected Parrot" />
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Inventory;