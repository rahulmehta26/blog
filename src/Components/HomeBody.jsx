import React from 'react'
import styles from './homebody.module.css'

function HomeBody() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (

        <>
            <div className={styles.body}>

                <img className={styles.image} src="https://terranovasecurity.com/wp-content/uploads/2023/12/trends-2024.jpg" alt="Cyber logo" />

                <div className={styles.para}>

                    <a href='' className={styles.heading} >The Most Important Cyber Security Trends of 2024</a>

                    <p>{`${year} - ${month} - ${day} Cyber Security Awareness`}</p>

                    <p>It’s likely that you won’t be surprised that cyber security experts will need to step up their game... </p>


                </div>

            </div>

            <div className={styles.body}>

                <div className={styles.para}>

                    <a href='' className={styles.heading} >The Most Important Cyber Security Trends of 2024</a>

                    <p>{`${year} - ${month} - ${day} Cyber Security Awareness`}</p>

                    <p>It’s likely that you won’t be surprised that cyber security experts will need to step up their game... </p>

                </div>

                <img className={styles.image} src="https://terranovasecurity.com/wp-content/uploads/2023/12/trends-2024.jpg" alt="Cyber logo" />

            </div>

            <div className={styles.body}>

                <img className={styles.image} src="https://terranovasecurity.com/wp-content/uploads/2023/12/trends-2024.jpg" alt="Cyber logo" />

                <div className={styles.para}>

                    <a href='' className={styles.heading} >The Most Important Cyber Security Trends of 2024</a>

                    <p>{`${year} - ${month} - ${day} Cyber Security Awareness`}</p>

                    <p>It’s likely that you won’t be surprised that cyber security experts will need to step up their game... </p>


                </div>

            </div>
        </>
    )
}

export default HomeBody