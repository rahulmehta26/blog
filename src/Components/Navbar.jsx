import React from 'react'
import styles from './navbar.module.css'

function Navbar() {
    return (
        <>

            <div className={styles.body}>

                <main className={styles.main}>

                    <header className={styles.header}>

                        <a href="" className={styles.logo}>BlogHub</a>

                        <nav className={styles.nav}>
                            <a href="">Login</a>
                            <a href="">Register</a>
                        </nav>

                    </header>
                </main>

            </div>
        </>
    )
}

export default Navbar