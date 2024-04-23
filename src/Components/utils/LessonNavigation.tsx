import React, { useState } from 'react';
import "../../Styles/LessonNavigation.css"
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
    username: string;
    redirects: {
        page_name: string;
        page_handler: () => void;
    }[];
}

const LessonNavigation: React.FC<NavigationProps> = ({
    username,
    redirects
}) => {
    const navigate = useNavigate();
    const usePageNavigation = () => {
        return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
    }

    const setPage = usePageNavigation();
    return (
        <div>
            <div className='border'>
                <button className="homebutton" onClick={() => setPage('Progress')}>Website.com</button>
                <div id="top-buttons_">
                    <button className="info-button_" onClick={() => setPage('about')}> About Us </button>
                    <button className="info-button_" onClick={() => setPage('contact')}> Contact </button>
                    <button className="info-button_" onClick={() => setPage('faq')}> FAQ </button>
                    <button id="red-name-button_" onClick={() => setPage('profile')} >{username}</button>
                </div>

            </div>

            <div className="page-title_">
                {redirects.map((button, index) => (
                    <span key={index} id="page-title-button_" onClick={button.page_handler}>
                        {button.page_name} {index < redirects.length - 1 && '>'}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default LessonNavigation;