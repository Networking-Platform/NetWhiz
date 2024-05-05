import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Progress.modules.css';
import transition_arrow from '../Images/progress_transition_arrow.png'
import UnlockedLesson from './LessonUtils/UnlockedLesson';
import LockedLesson from './LessonUtils/LockedLesson';
import NavigationBar from './utils/BlueNavBar'
import Navigation from './utils/Navigation';



interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    InventoryHandler: () => void;
    ProgressHandler: () => void;
    SettingsHandler: () => void;
    backToHomeHandler: () => void;
    goToHTTP: () => void;
    goToDNS: () => void;
    goToIP: () => void;
    goToTCP: () => void;
}

function Progress({ 
    ProfileHandler,
    getStartedHandler,
    InventoryHandler,
    ProgressHandler,
    backToHomeHandler,
    SettingsHandler,
    goToHTTP,
    goToDNS,
    goToIP,
    goToTCP }: Props) {

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

                <div id="progress-group">
                    <div id="progress-text">15% complete</div>
                    <div id="white-bar"></div>
                    <div id="blue-bar"></div>
                    <div id="status-group">
                        <div id="status-circle"></div>
                        <div id="status-text">Current Status</div>
                        <div id="status-level">Beginner</div>
                    </div>
                </div>

                <UnlockedLesson
                    lessonNumber="0"
                    lessonName="Tutorial"
                    lessonInfo="Introduction to NetQuest"
                    completed={true}
                    goToLesson={goToHTTP}
                />

                <UnlockedLesson 
                    lessonNumber="1"
                    lessonName="HTTP"
                    lessonInfo="Learn about HTTP!"
                    completed={false}
                    goToLesson={goToHTTP}
                />

                <UnlockedLesson 
                    lessonNumber="2"
                    lessonName="TCP"
                    lessonInfo="Learn about TCP!"
                    completed={false}
                    goToLesson={goToTCP}
                />

                <UnlockedLesson
                    lessonNumber="3"
                    lessonName="IP"
                    lessonInfo="Learn about IP!"
                    completed={false}
                    goToLesson={goToIP}
                />

                <UnlockedLesson
                    lessonNumber="4"
                    lessonName="DNS"
                    lessonInfo="Learn about DNS!"
                    completed={true}
                    goToLesson={goToDNS}
                />

                <LockedLesson
                    lessonNumber="5"
                    lessonName="Routing: OSPF"
                    lessonInfo="Learn about OSPF!"
                    goToLesson={goToDNS}
                />

                <div id="transition-arrow">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>
            </div>
        </div>
    );
}

export default Progress;