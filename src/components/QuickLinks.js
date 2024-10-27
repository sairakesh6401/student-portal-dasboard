
import styles from '../styles/QuickLinks.module.css';

export default function QuickLinks() {
    return (
        <div className={styles.quickLinksContainer}>
            <h2 className={styles.heading}>Quick Links</h2>
            <div className={`${styles.quickLinkCard} ${styles.canvasLMS}`}>
                <img src="/images/canvas-icon.png" alt="Canvas LMS" className={styles.icon} />
                <h3>Canvas LMS</h3>
                <p>Click here to access your LMS portal for assignments, class recordings, and notes.</p>
            </div>
            <div className={`${styles.quickLinkCard} ${styles.joinLive}`}>
                <img src="/images/live-class-icon.png" alt="Join Live Class" className={styles.icon} />
                <h3>Join Live Class</h3>
                <p>Click here to join your live class session. Please do not share this link.</p>
            </div>
            <div className={`${styles.quickLinkCard} ${styles.contactTeacher}`}>
                <img src="/images/contact-icon.png" alt="Contact Teacher" className={styles.icon} />
                <h3>Contact Teacher</h3>
                <p>Click here to contact your teacher for any doubts or concerns.</p>
            </div>
        </div>
    );
}
