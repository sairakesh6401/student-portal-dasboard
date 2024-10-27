
import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/images/logo1.png';
import logos from '/public/images/logo2.png';
import styles from '../styles/ClassSchedule.module.css';

const ClassSchedule = () => {
    const [selectedClass, setSelectedClass] = useState(null);

    const classes = [
        { id: 1, time: '5:00 - 5:50 PM', date: 'Tuesday', status: 'Yesterday' },
        { id: 2, time: '6:30 - 7:15 PM', date: 'Tuesday', status: 'Today' },
        { id: 3, time: '5:00 - 5:50 PM', date: 'Tuesday', status: 'Tomorrow' },
        { id: 4, time: '5:00 - 5:50 PM', date: 'Tuesday', status: '23rd Sept. 2024' },
    ];

    const handleClassClick = (cls) => {
        setSelectedClass(cls);
    };

    const handleClosePreview = () => {
        setSelectedClass(null);
    };

    return (
        <div className={styles.classScheduleContainer}>
            <h2>Your Class Schedule</h2>
            {classes.map((cls) => (
                <div
                    key={cls.id}
                    className={`${styles.classItem} ${cls.status === 'Today' ? styles.today : ''}`}
                    onClick={() => handleClassClick(cls)}
                >
                    <Image src={logo} alt="Class Logo" width={30} height={30} className={styles.logo} />
                    <div className={styles.info}>
                        <p>Class 7, Science | Live Class</p>
                        <p><strong>{cls.date}, {cls.time}</strong></p>
                    </div>
                    <p className={styles.status}>{cls.status}</p>
                </div>
            ))}

            {selectedClass && (
                <div 
                    className={styles.preview}
                    style={{
                        width: '1120px',
                        height: '630px',
                        top: '125px',
                        left: '80px'
                    }}
                >
                    <button onClick={handleClosePreview} className={styles.closeButton}>X</button>
                    <h3>Class Details</h3>
                    <p>Date: {selectedClass.date}</p>
                    <p>Time: {selectedClass.time}</p>
                    <Image src={logos} alt="Class Preview Logo" width={300} height={200} className={styles.previewImage} />
                </div>
            )}
        </div>
    );
};

export default ClassSchedule;
