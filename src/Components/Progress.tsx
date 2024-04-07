import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Progress.modules.css';
import transition_arrow from '../Images/progress_transition_arrow.png'
import progress_checkmark from '../Images/progress_checkmark.png'
import NavigationBar from './utils/BlueNavBar'
import Navigation from './utils/Navigation';

interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    InventoryHandler: () => void;
    ProgressHandler: () => void;
    SettingsHandler: () => void;
    backToHomeHandler:() => void;
}

function Progress({ProfileHandler,
                    getStartedHandler,
                    InventoryHandler,
                    ProgressHandler,
                    SettingsHandler,
                    backToHomeHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                currentPage='Progress'
            />;

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>

                <Navigation 
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Profile', page_handler: ProgressHandler }
                        ]} 
                />
                
                <div id = "progress-group">
                    <div id = "progress-text">15% complete</div>
                    <div id = "white-bar"></div>
                    <div id = "blue-bar"></div>
                    <div id = "status-group">
                        <div id = "status-circle"></div>
                        <div id = "status-text">Current Status</div>
                        <div id = "status-level">Beginner</div>
                    </div>
                </div>

                <div id = "lesson0-box">
                    <div id = "unlocked-border"></div>
                    <div id = "completed-inner-border">
                        <div id = "lesson-text">LESSON 0</div>
                        <div id = "lesson-name">Tutorial</div>
                    </div>
                    <div id = "current-circle">
                        <div id = "checkmark">
                            <img src={progress_checkmark} alt="checkmark"></img>
                        </div>
                    </div>
                    <div id = "down-arrow"></div>
                </div>
                
                <div id = "lesson1-box">
                    <div id = "unlocked-border"></div>
                    <div id = "unlocked-inner-border">
                        <div id = "lesson-text">LESSON 1</div>
                        <div id = "lesson-name">"Topic"</div>
                    </div>
                    <div id = "down-arrow"></div>
                </div>

                <div id = "lesson2-box">
                    <div id = "unlocked-border"></div>
                    <div id = "locked-border">
                        <div id = "lesson-text">LESSON 2</div>
                        <div id = "lesson-name">"Topic"</div>
                    </div>
                    <div id = "down-arrow"></div>
                </div>

                <div id = "lesson3-box">
                    <div id = "unlocked-border"></div>
                    <div id = "locked-border">
                        <div id = "lesson-text">LESSON 2</div>
                        <div id = "lesson-name">"Topic"</div>
                    </div>
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