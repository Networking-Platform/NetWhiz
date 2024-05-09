import React, { useState } from 'react';
import "../../Styles/Lesson.css"
import progress_checkmark from '../../Images/progress_checkmark.png'
import { Button, Popover } from 'antd';

interface LessonProps {
    lessonNumber: string;
    lessonName: string;
    lessonInfo: string;
    completed: boolean;
    goToLesson: () => void;
}

const UnlockedLesson: React.FC<LessonProps> = ({
    lessonNumber,
    lessonName,
    lessonInfo,
    completed,
    goToLesson
} : LessonProps) => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    return (
        <Popover
            content={
                <div style={{ color: 'white' }}>
                    <p>{lessonInfo}</p>
                    <Button type="primary" id="popover-button" onClick={goToLesson}>START</Button>
                    <a onClick={hide}></a>
                </div>
            }
            overlayStyle={{ width: '20%', borderRadius: '5px' }}
            title={`Lesson ${lessonNumber}: ${lessonName}`}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            color="#F47878"
            placement={"bottom"}
            
        >
            <div id={`lesson${lessonNumber}-box`}>
                <div id="unlocked-border"></div>
                <div id={`${completed ? "completed" : "unlocked"}-inner-border`}>
                    <div id="lesson-text">LESSON {lessonNumber}</div>
                    <div id="lesson-name">{lessonName}</div>
                </div>
                {completed && <div id="current-circle">
                    <div id="checkmark">
                        <img src={progress_checkmark} alt="checkmark"></img>
                    </div>
                </div>}
                <div id="down-arrow"></div>
            </div>
        </Popover>
    );
};

export default UnlockedLesson