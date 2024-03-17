import React, { useState } from 'react';
import user_4_fill from '../Images/user_4_fill.png';
import '../Styles/FAQ.modules.css';
import home_office from '../Images/Stuck at Home Home Office.png';
import '../Styles/Navigation.css';

interface Props {
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
}

interface FAQ {
    question: string;
    answer: string;
}

function ContactUs({aboutUsHandler, contactHandler, FAQHandler}: Props) {

    const faqData: FAQ[] = [
        { question: 'Where can I watch the courses?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    const [questionStates, setQuestionStates] = useState<boolean[]>(Array(faqData.length).fill(false));
    const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
    const toggleQuestion = (index: number) => {
        const newQuestionStates = questionStates.map((state, i) => i === index ? !state : state);
        setQuestionStates(newQuestionStates);
        if (expandedQuestions.includes(index)) {
            setExpandedQuestions(expandedQuestions.filter((i) => i !== index));
        } else {
            setExpandedQuestions([...expandedQuestions, index]);
        }
    };
    return (
        <div>
            <div id="top-buttons">
                <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                <button className="info-button" onClick={contactHandler}> Contact </button>
                <button className="info-button" onClick={FAQHandler}> FAQ </button>
            </div>
            <div id="website-title-cu">Website.com</div>
            <div id="page-title"> Frequently Asked Questions</div>
            <div id="questions">

                {faqData.map((faq, index) => (
                    <div key={index} id="faqBlock" style={{ marginBottom: '8px', borderTop: '1px solid #ccc', paddingBottom: '8px'}}>
                        <div 
                            onClick={() => toggleQuestion(index)} 
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                        >
                            <div>{faq.question}</div>
                            <div>{questionStates[index] ? '\\/' : '>'}</div>
                        </div>
                        {expandedQuestions.includes(index) && (
                            <div style={{ marginTop: '30px' }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <img id="icon" src={user_4_fill} alt="user icon" />
            <img id="homeOffice" src={home_office} alt="faq Image"/>
        </div>
    )
}

export default ContactUs;