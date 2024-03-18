import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Profile from './Components/Profile';
import Inventory from './Components/Inventory';
import View from './Components/View';
import SignUp from './Components/SignUp';
import Progress from './Components/Progress';

import "@fontsource/inter"
import "@fontsource/inter/700.css";

const hard_clicking_sound = new Audio(require('./Audios/clicking_hard.mp3'));
const soft_clicking_sound = new Audio(require('./Audios/clicking_soft.mp3'));

function App() {

  const playClickSound = (hard = false) => {
    const clicking_sound = hard ? hard_clicking_sound : soft_clicking_sound;
    clicking_sound.play();
  }

  const location = useLocation();

  const usePageNavigation = () => {
    const navigate = useNavigate();
    return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
  }

  const setPage = usePageNavigation();

  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return '';
    return path.slice(1);
  }

  const goToLogin = () => {
    playClickSound(getPageName() === 'login' ? true : false);
    setPage('login');
  }

  const backToHome = () => {
    playClickSound(getPageName() === '' ? true : false);
    setPage('');
  }

  const toContactPage = () => {
    playClickSound(getPageName() === 'contact' ? true : false);
    setPage('contact');
  }

  const toAboutUsPage = () => {
    playClickSound(getPageName() === 'about' ? true : false);
    setPage('about');
  }

  const toFAQPage = () => {
    playClickSound(getPageName() === 'faq' ? true : false);
    setPage('faq');
  }

  const toProfilePage = () => {
    playClickSound(getPageName() === 'profile' ? true : false);
    setPage('profile');
  }

  const toInventoryPage = () => {
    playClickSound(getPageName() === 'inventory' ? true : false);
    setPage('inventory');
  }

  const toViewPage = () => {
    playClickSound(getPageName() === 'inventory/view' ? true : false);
    setPage('inventory/view');
  }

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home 
                                  getStartedHandler={goToLogin} 
                                  aboutUsHandler={toAboutUsPage} 
                                  contactHandler={toContactPage} 
                                  FAQHandler={toFAQPage} 
                                  ProfileHandler={toProfilePage} 
                                />} />

      <Route path="/login" element={<LogIn 
                                          backToHomeHandler={backToHome} 
                                        />} />
        <Route path="/contact" element={<ContactUs 
                                            aboutUsHandler={toAboutUsPage} 
                                            contactHandler={toContactPage} 
                                            FAQHandler={toFAQPage} 
                                          />} />
        <Route path="/about" element={<AboutUs 
                                          aboutUsHandler={toAboutUsPage} 
                                          contactHandler={toContactPage} 
                                          FAQHandler={toFAQPage} 
                                        />} />
        <Route path="/faq" element={<FAQ 
                                        aboutUsHandler={toAboutUsPage} 
                                        contactHandler={toContactPage} 
                                        FAQHandler={toFAQPage} 
                                      />} />
        <Route path="/profile" element={<Profile 
                                            ProfileHandler={toProfilePage} 
                                            aboutUsHandler={toAboutUsPage} 
                                            contactHandler={toContactPage} 
                                            FAQHandler={toFAQPage} 
                                            getStartedHandler={goToLogin}
                                            InventoryHandler={toInventoryPage}
                                            backToHomeHandler={backToHome}
                                            ProgressHandler={toProfilePage}
                                          />} />
        <Route path="/inventory" element={<Inventory 
                                              ProfileHandler={toProfilePage} 
                                              aboutUsHandler={toAboutUsPage} 
                                              contactHandler={toContactPage} 
                                              FAQHandler={toFAQPage} 
                                              getStartedHandler={goToLogin}
                                              ViewHandler={toViewPage}
                                              InventoryHandler={toInventoryPage}
                                              backToHomeHandler={backToHome} 
                                              ProgressHandler={toProfilePage}
                                            />} />
        <Route path="/inventory/view" element={<View 
                                              ProfileHandler={toProfilePage} 
                                              aboutUsHandler={toAboutUsPage} 
                                              contactHandler={toContactPage} 
                                              FAQHandler={toFAQPage} 
                                              getStartedHandler={goToLogin}
                                              ViewHandler={toViewPage}
                                              InventoryHandler={toInventoryPage}
                                              backToHomeHandler={backToHome}
                                            />} />
      </Routes>
    </div>
  );
}

export default App;
