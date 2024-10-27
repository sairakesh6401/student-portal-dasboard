

"use client";
import Header from '../components/Header';
import Announcements from '../components/Announcements';
import QuickLinks from '../components/QuickLinks';
import ClassSchedule from '../components/ClassSchedule';
import Recordings from '../components/Recordings';
import styles from '../styles/Dashboard.module.css';
import '../styles/globals.css';

export default function HomePage() {
    return (
        <>
            <Header />  
            <div className="container">  

            <div className={styles.dashboardContainer}>
            <section className="announcements">
                    <Announcements />
                </section>
                <section className="class-schedule">
                    <ClassSchedule />
                </section>
            </div> 
            <div >
                <section className="quick-links">
                    <QuickLinks />
                </section>
            </div>
            <div>
                <section className="recordings">
                    <Recordings />
                </section>
            </div>
            </div>
        </>
    );
}
