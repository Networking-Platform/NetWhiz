import React, { useState } from 'react';
import "../../Styles/Lesson.css"
import { Button, Popover } from 'antd';

interface LessonProps {
    lessonNumber: string;
    lessonName: string;
    lessonInfo: string;
    goToLesson: () => void;
}

const LockedLesson: React.FC<LessonProps> = ({
    lessonNumber,
    lessonName,
    lessonInfo,
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
                <div style={{ color: '#818181' }}>
                    <p>{lessonInfo}</p>
                    <Button type="primary" id="popover-button">LOCKED</Button>
                    <a onClick={hide}></a>
                </div>
            }
            overlayStyle={{ width: '20%', borderRadius: '5px' }}
            title={`Lesson ${lessonNumber}: ${lessonName}`}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            color="#EAEAEA"
            placement={"bottom"}
            
        >
            <div id={`lesson${lessonNumber}-box`}>
                <div id="unlocked-border"></div>
                <div id="locked-border">
                    <div id="lesson-text">LESSON {lessonNumber}</div>
                    <div id="lesson-name">{lessonName}</div>
                </div>
                <div id="down-arrow"></div>
            </div>
        </Popover>
    );
};

export default LockedLesson