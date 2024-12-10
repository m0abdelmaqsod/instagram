import React from 'react';
import styles from './styles/NavHomeResponsive.module.css'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";




const NavHomeResponsive = () => {
    return (
        <>
            <section className={styles.NavHomeResponsive}>

                <div className={styles.iconNavRes}>
                    <div className={styles.divIco}>
                        <FaRegHeart />
                    </div>
                    <div className={styles.divIco}>
                        <VscDiffAdded />
                    </div>
                </div>


                <div className={styles.divLogoNav}>
                    <Link className={styles.nameIconLogo} to="/">
                        <span><IoIosArrowDown /></span>
                        <span>Instagram</span>
                    </Link>
                </div>

            </section>
        </>
    )
}

export default NavHomeResponsive