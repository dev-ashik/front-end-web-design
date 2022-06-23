import React from 'react';
import Layout from '../../Layout/Layout';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>navigation bar</h2>
            </div>
            <section className='section'>
                <nav className={styles.nav}>
                    <input type="checkbox" id='check' className={styles.check} />
                    <label for="check" className={styles.checkbtn}>
                        <MenuIcon/>
                    </label>

                    <label for="" className={styles.logo}>Nav-1</label>

                    <ul>
                        <li><a href="#" class="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </nav>
                <section></section>
            </section>
        </Layout>
    );
};

export default NavigationBar;