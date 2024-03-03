import React, { useState } from 'react';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Profile from './Components/Profile';
import Inventory from './Components/Inventory';
import Progress from './Components/Progress';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const goToLogin = () => {
    setCurrentPage('LogIn');
  }

  const backToHome = () => {
    setCurrentPage('Home');
  }

  const toContactPage = () => {
    setCurrentPage('ContactUs');
  }

  const toAboutUsPage = () => {
    setCurrentPage('AboutUs');
  }

  const toFAQPage = () => {
    setCurrentPage('FAQ');
  }

  const toProfilePage = () => {
    setCurrentPage('Profile');
  }

  const toInventoryPage = () => {
    setCurrentPage('Inventory');
  }

  const toProgressPage = () => {
    setCurrentPage('Progress');
  }

  return (
    <div>
      {currentPage === 'Home' ? <Home 
                                  getStartedHandler={goToLogin} 
                                  aboutUsHandler={toAboutUsPage} 
                                  contactHandler={toContactPage} 
                                  FAQHandler={toFAQPage} 
                                  ProfileHandler={toProfilePage} 
                                /> : null}

      {currentPage === 'LogIn' ? <LogIn 
                                    backToHomeHandler={backToHome} 
                                  /> : null}

      {currentPage === 'AboutUs' ? <AboutUs 
                                      aboutUsHandler={toAboutUsPage} 
                                      contactHandler={toContactPage} 
                                      FAQHandler={toFAQPage} 
                                    /> : null}
      {currentPage === 'ContactUs' ? <ContactUs 
                                      aboutUsHandler={toAboutUsPage} 
                                      contactHandler={toContactPage} 
                                      FAQHandler={toFAQPage}
                                    /> : null}
      {currentPage === 'FAQ' ? <FAQ 
                                  aboutUsHandler={toAboutUsPage} 
                                  contactHandler={toContactPage} 
                                  FAQHandler={toFAQPage}
                                /> : null}
      {currentPage === 'Profile' ? <Profile 
                                      ProfileHandler={toProfilePage} 
                                      aboutUsHandler={toAboutUsPage} 
                                      contactHandler={toContactPage} 
                                      FAQHandler={toFAQPage} 
                                      getStartedHandler={goToLogin}
                                      InventoryHandler={toInventoryPage}
                                      ProgressHandler={toProgressPage}
                                    /> : null}
      {currentPage === 'Inventory' ? <Inventory 
                                      ProfileHandler={toProfilePage} 
                                      aboutUsHandler={toAboutUsPage} 
                                      contactHandler={toContactPage} 
                                      FAQHandler={toFAQPage} 
                                      getStartedHandler={goToLogin}
                                      ProgressHandler={toProgressPage}
                                    /> : null}
      {currentPage === 'Progress' ? <Progress 
                                      ProfileHandler={toProfilePage} 
                                      aboutUsHandler={toAboutUsPage} 
                                      contactHandler={toContactPage} 
                                      FAQHandler={toFAQPage} 
                                      getStartedHandler={goToLogin}
                                      InventoryHandler={toInventoryPage}
                                      ProgressHandler={toProgressPage}
                                    /> : null}
    </div>

  );
}

export default App;
