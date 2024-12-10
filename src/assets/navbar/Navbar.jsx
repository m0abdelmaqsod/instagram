import React from 'react';
import styles from './css/navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LiaFacebookMessenger } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { VscDiffAdded } from "react-icons/vsc";
import { ImFilm } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";




import imgUser from '../../assets/images/form.png';









const Navbar = () => {
    return (
        <>
            <section className={styles.navbar}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <Link className={styles.nameIconLogo} to="/">Instagram</Link>
                        <Link className={styles.logoIcon} to="/"><FaInstagram /></Link>
                    </div>

                    <div className={styles.link_pages}>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/'>
                                    <span className={styles.nameIconNav}>الصفحة الرئيسية</span>
                                    <span className=""><MdHomeFilled /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>بحث</span>
                                    <span className=""><IoSearchOutline /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>استكشاف</span>
                                    <span className=""><MdOutlineExplore /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>ريلز</span>
                                    <span className=""><ImFilm /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>الرسائل</span>
                                    <span className=""><LiaFacebookMessenger /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>الاشعارات</span>
                                    <span className=""><AiOutlineHeart /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/s'>
                                    <span className={styles.nameIconNav}>انشاء</span>
                                    <span className=""><VscDiffAdded /></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? styles.activeNav : ""} to='/home_user'>
                                    <span className={styles.nameIconNav}>ملف شخصى</span>
                                    <span className={styles.img_user}>
                                        <img src={imgUser} alt="" />
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>



                    <button className={styles.more}>
                        <span className={styles.nameIconMore}>المزيد</span>
                        <span><GrMenu /></span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Navbar