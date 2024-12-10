import React, { useState } from 'react';
import styles from './css/allLike.module.css'
import { Link } from 'react-router-dom';
import HoverUser from '../../hoverProfile/HoverUser';
import { HiMiniCheckBadge } from "react-icons/hi2";




import imgUser1 from '../../../../assets/images/ava-1.jpg';
import imgUser2 from '../../../../assets/images/ava-2.jpg';
import imgUser3 from '../../../../assets/images/ava-3.jpg';
import imgUser4 from '../../../../assets/images/Image-07.jpg';
import imgUser5 from '../../../../assets/images/Image-06.jpg';
import imgUser6 from '../../../../assets/images/Image-08.jpg';
import imgUser7 from '../../../../assets/images/ava-4.jpg';


const AllLike = ({ showAllLikes, setShowAllLikes }) => {

    const [follow, setFollow] = useState(false)



    return (
        <>
            <div className={showAllLikes === false ? styles.noneAllLike : styles.allLike}>
                <div className={styles.divAllLikes}>
                    <div className={styles.openLikePost}>



                        <div className={styles.navAllLikes}>
                            <button onClick={() => setShowAllLikes(false)}>X</button>
                            <h3>تسجيلات الإعجاب</h3>
                        </div>

                        <div className={styles.scrollAllUser}>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <span><HiMiniCheckBadge /></span>
                                                ahmed
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>ahmed</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser1} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                smsma55
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>smsma</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser2} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                moabd
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>mohamed</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser3} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                safe
                                            </Link>

                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser4} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <span><HiMiniCheckBadge /></span>
                                                a84253041
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>ahmed</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser5} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                {/* <span><HiMiniCheckBadge /></span> */}
                                                imanelsoufy
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>Iman Elsoufy</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser6} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.divInfoUser}>
                                <div className={styles.divBtnFollow}>
                                    {
                                        follow === false ?
                                            <button className={styles.btnIFollow} onClick={() => setFollow(true)}>
                                                أتابع
                                            </button> :
                                            <button className={styles.btnFollow} onClick={() => setFollow(false)}>
                                                متابعة
                                            </button>
                                    }
                                </div>


                                <div className={styles.data_user}>
                                    <div className={styles.nameUserPost}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                {/* <span><HiMiniCheckBadge /></span> */}
                                                imanelsoufy
                                            </Link>


                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                        <p>Iman Elsoufy</p>
                                    </div>

                                    <div className={styles.div_img}>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                <img src={imgUser7} alt="" />
                                            </Link>
                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllLike