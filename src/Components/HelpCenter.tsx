import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/HelpCenter.modules.css';
import NavigationBar from './utils/BlueNavBar'
import Navigation from './utils/Navigation';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
    SettingsHandler:() => void;
    helpCenterHandler:() => void;
}

function HelpCenter({ProfileHandler,
                    getStartedHandler,
                    ProgressHandler,
                    InventoryHandler,
                    backToHomeHandler,
                    helpCenterHandler,
                    SettingsHandler} : Props) {

    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
                    
    const handleSubmit = async () => {
        if (!input) return;
        try {
            const response = await axios.get(`https://localhost:3000/search=${input}`);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
                currentPage='helpCenter'
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
                <div id='hc-title'>How can we help you?</div>
                <div id='search-container'>
                    <FontAwesomeIcon icon={faMicroscope} id='search-icon' onClick={handleSubmit} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <input id='search-input'
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Search for topics .."
                    />
                </div>
                <div id='hc-body'>See some common topics that may help</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div id="hc-boxStyle">
                        <p className='hc-bold'>Website tutorial</p>
                        <p className='hc-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div id="hc-boxStyle">
                        <p className='hc-bold'>Website tutorial</p>
                        <p className='hc-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div id="hc-boxStyle">
                        <p className='hc-bold'>Website tutorial</p>
                        <p className='hc-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default HelpCenter;