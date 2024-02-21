import React, { useState } from 'react';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';

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

  return (
    <div>
      {currentPage === 'Home' ? <Home getStartedHandler={goToLogin} aboutUsHandler={toAboutUsPage} contactHandler={toContactPage} FAQHandler={toFAQPage}/> : null}
      {currentPage === 'LogIn' ? <LogIn backToHomeHandler={backToHome} /> : null}
      {currentPage === 'AboutUs' ? <AboutUs aboutUsHandler={toAboutUsPage} contactHandler={toContactPage} FAQHandler={toFAQPage} /> : null}
      {currentPage === 'ContactUs' ? <ContactUs aboutUsHandler={toAboutUsPage} contactHandler={toContactPage} FAQHandler={toFAQPage}/> : null}
      {currentPage === 'FAQ' ? <FAQ aboutUsHandler={toAboutUsPage} contactHandler={toContactPage} FAQHandler={toFAQPage}/> : null}
    </div>

  );
}

export default App;
