import React, { useState } from 'react';
import "../../Styles/Navigation.css"
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
    username: string;
    redirects: {
        page_name: string;
        page_handler: () => void;
    }[];
}

const Navigation: React.FC<NavigationProps> = ({
    username,
    redirects
}) => {
    const usePageNavigation = () => {
        const navigate = useNavigate();
        return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
    }
    
    const setPage = usePageNavigation();
    return (
        <div>
            <div className="page-title">
                {redirects.map((button, index) => (
                    <span key={index} id="page-title-button" onClick={button.page_handler}>
                        {button.page_name} {index < redirects.length - 1 && '>'}
                    </span>
                ))}
            </div>
            <div id="top-buttons">
                <button className="info-button" onClick={() => setPage('about')}> About Us </button>
                <button className="info-button" onClick={() => setPage('contact')}> Contact </button>
                <button className="info-button" onClick={() => setPage('faq')}> FAQ </button>
                <button className="info-button" onClick={() => setPage('profile')}> Profile </button>
            </div>
            <button id="red-name-button">{username}</button>
        </div>
    );
};

export default Navigation;