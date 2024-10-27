
import styles from '../styles/Announcements.module.css';

const Announcements = () => {
    return (
        <div className={styles.announcementsContainer}>
            <h2>Announcements</h2>
            <div className={styles.announcementItem}>
                <img src="/images/announcement.png" alt="Announcement Icon" className={styles.icon} />
                <p>On account of Independence Day, August 15th will be a holiday.</p>
            </div>
            <div className={styles.announcementItem}>
                <img src="/images/announcement2.png" alt="Announcement Icon" className={styles.icon} />
                <p>Reminder to finish your assignments and submit them by Monday.</p>
            </div>
        </div>
    );
};

export default Announcements;
