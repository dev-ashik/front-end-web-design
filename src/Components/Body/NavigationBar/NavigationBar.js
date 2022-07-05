import React from 'react';
import Layout from '../../Layout/Layout';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavigationBar.module.css';
import nav1 from '../../../images/nav-1.png';
import nav1_responsive from '../../../images/nav-1-responsive.png';
import nav2 from '../../../images/nav-2.png';
import nav2_responsive from '../../../images/nav-2-responsive.png';

const NavigationBar = () => {
    return (
        <Layout>
            <div className='name'>
                <h2>navigation bar</h2>
            </div>
            <section className='section'>
                <h3>nav-1</h3>
                <img src={nav1} alt="nav" className={styles.nav1}/>
                <h3>nav-1 responsive</h3>
                <img src={nav1_responsive} alt="nav" className={styles.nav1_responsive}/>
                
                <br />
                <a href="" className='codeAndSitebtn' >code</a> 
                <a href="" className='codeAndSitebtn'>visit site</a>
            </section>

            <section className='section'>
                <h3>nav-2</h3>
                <img src={nav2} alt="nav" className={styles.nav1}/>
                <h3>nav-2 responsive</h3>
                <img src={nav2_responsive} alt="nav" className={styles.nav1_responsive}/>
                
                <br />
                <a href="" className='codeAndSitebtn' >code</a> 
                <a href="" className='codeAndSitebtn'>visit site</a>
            </section>
        </Layout>
    );
};

export default NavigationBar;