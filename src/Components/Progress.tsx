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
    goToForwarding: () => void;
    goToEmail: () => void;
    goToTLS: () => void;
    goToWifi: () => void;
    helpCenterHandler: () => void;
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
    goToTCP,
    goToForwarding,
    goToEmail,
    goToTLS,
    goToWifi,
    helpCenterHandler }: Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                helpCenterHandler={helpCenterHandler}
                currentPage='Progress'
            />;

            <div className="white-half">

                <Navigation 
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Profile', page_handler: ProgressHandler }
                        ]} 
                />

                <div id="progress-group">
                    <div id="progress-text">67% complete</div>
                    <div id="white-bar"></div>
                    <div id="blue-bar"></div>
                    <div id="status-group">
                        <div id="status-circle"></div>
                        <div id="status-text">Current Status</div>
                        <div id="status-level">Expert</div>
                    </div>
                </div>

                <UnlockedLesson 
                    lessonNumber="1"
                    lessonName="HTTP"
                    lessonInfo="Learn about HTTP!"
                    completed={true}
                    goToLesson={goToHTTP}
                />

                <div id="arrow-12">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="2"
                    lessonName="DNS"
                    lessonInfo="Learn about DNS!"
                    completed={true}
                    goToLesson={goToDNS}
                />

                <div id="arrow-13">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="3"
                    lessonName="Email"
                    lessonInfo="Learn about Email!"
                    completed={false}
                    goToLesson={goToEmail}
                />

                <div id="arrow-24">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson 
                    lessonNumber="4"
                    lessonName="TCP"
                    lessonInfo="Learn about TCP!"
                    completed={true}
                    goToLesson={goToTCP}
                />

                <div id="arrow-45">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="5"
                    lessonName="IP"
                    lessonInfo="Learn about IP!"
                    completed={true}
                    goToLesson={goToIP}
                />

                <div id="arrow-46">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="6"
                    lessonName="TLS"
                    lessonInfo="Learn about TLS!"
                    completed={true}
                    goToLesson={goToTLS}
                />

                <div id="arrow-57">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="7"
                    lessonName="Forwarding"
                    lessonInfo="Learn about Forwarding!"
                    completed={true}
                    goToLesson={goToForwarding}
                />

                <div id="arrow-58">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <UnlockedLesson
                    lessonNumber="8"
                    lessonName="WiFi"
                    lessonInfo="Learn about WiFi"
                    completed={false}
                    goToLesson={goToWifi}
                />

                <div id="arrow-89">
                    <img src={transition_arrow} alt="Transition Arrow"></img>
                </div>

                <LockedLesson
                    lessonNumber="9"
                    lessonName="Routing: OSPF"
                    lessonInfo="Learn about OSPF!"
                    goToLesson={goToDNS}
                />

            </div>
        </div>
    );
}

export default Progress;