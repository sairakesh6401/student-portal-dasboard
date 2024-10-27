// Recordings.js

import { useState } from 'react';
import styles from '../styles/Recordings.module.css';
import recordingIcon from '../../public/images/recording-icon.png';

const recordingsData = [
  { id: 1, title: 'Algebraic Equations', subject: 'Class 7 Math', date: '24th October, 2024' },
  { id: 2, title: 'Inert Gases', subject: 'Class 7 Math', date: '24th October, 2024' },
  { id: 3, title: 'Fundamentals of Organic Chemistry', subject: 'Class 7 Science', date: '24th October, 2024' },
  { id: 4, title: 'Trigonometry 101', subject: 'Class 7 Math', date: '24th October, 2024' },
];

const Recordings = () => {
  const [selectedRecording, setSelectedRecording] = useState(null);

  const handleRecordingClick = (recording) => {
    setSelectedRecording(recording);
  };

  const handleClosePreview = () => {
    setSelectedRecording(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Access Class Recordings</h2>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for class recordings" className={styles.searchBar} />
        <button className={styles.dropdown}>This week</button>
        <button className={styles.dropdown}>All subjects</button>
      </div>
      
      <div className={styles.recordingsList}>
        {recordingsData.map((recording) => (
          <div
            key={recording.id}
            className={`${styles.recordingItem} ${selectedRecording?.id === recording.id ? styles.active : ''}`}
            onClick={() => handleRecordingClick(recording)}
          >
            <div className={styles.recordingInfo}>
              <h3>{recording.title}</h3>
              <p>{recording.subject}</p>
              <p>{recording.date}</p>
            </div>
            <img src={recordingIcon.src} alt="Recording Icon" className={styles.icon} />
          </div>
        ))}
      </div>

      {selectedRecording && (
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
          <h3>{selectedRecording.title}</h3>
          <p>{selectedRecording.subject}</p>
          <p>{selectedRecording.date}</p>
          <img src={recordingIcon.src} alt="Recording Preview" className={styles.previewImage} />
        </div>
      )}
    </div>
  );
};

export default Recordings;
