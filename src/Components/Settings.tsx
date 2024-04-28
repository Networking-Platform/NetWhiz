import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Settings.modules.css';
import NavigationBar from './utils/BlueNavBar'
import Navigation from './utils/Navigation';
import React, { useState } from 'react';

interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
    SettingsHandler:() => void;
    helpCenterHandler:() => void;
}

function Settings({ProfileHandler,
                    getStartedHandler,
                    ProgressHandler,
                    InventoryHandler,
                    backToHomeHandler,
                    helpCenterHandler,
                    SettingsHandler} : Props) {
    
    const [is1On, setIs1On] = useState<boolean>(false);
    const toggleSwitch1 = () => {
        setIs1On(!is1On);
    };

    const [is2On, setIs2On] = useState<boolean>(false);
    const toggleSwitch2 = () => {
        setIs2On(!is2On);
    };

    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative'}}>
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                helpCenterHandler={helpCenterHandler}
                currentPage='Settings'
            />;

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <Navigation 
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Profile', page_handler: SettingsHandler }
                        ]} 
                />
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

                    <div className={`slider-button ${is1On ? 'on' : 'off'}`} onClick={toggleSwitch1}>
                        <div className="slider"></div>
                    </div>

                    <div className="not-grey-text">If you’re looking forward for our updates, right-click the button </div>
                    <div className="not-black-text">Enable Email Notifications</div>
                    <div className={`slider-button ${is2On ? 'on' : 'off'}`} onClick={toggleSwitch2}>
                        <div className="slider"></div>
                    </div>
                    <div className="not-grey-text">Receive emails for messages</div>
                    <button type="submit" id="save-changes"> Save Changes </button>
                </div>
                
            </div>
        </div>
    );
}

export default Settings;