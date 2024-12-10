import React, { useState } from 'react';
import styles from './css/explorePeople.module.css'
import { Link } from 'react-router-dom';
import { HiMiniCheckBadge } from "react-icons/hi2";
import HoverUser from '../../Components/Home/hoverProfile/HoverUser';








import imgUser from '../../assets/images/blog3.png';
import imgUser1 from '../../assets/images/blog2.png';
import imgUser2 from '../../assets/images/ace285d6c8cbf08fc4b73026eebfde79.jpg';
import imgUser3 from '../../assets/images/Image-01.jpg';
import imgUser4 from '../../assets/images/Image-02.jpg';
import imgUser5 from '../../assets/images/Image-04.jpg';
import imgUser6 from '../../assets/images/Image-05.jpg';
import imgUser7 from '../../assets/images/Image-03.jpg';
import imgUser8 from '../../assets/images/Image-06.jpg';
import imgUser9 from '../../assets/images/Image-07.jpg';
import imgUser10 from '../../assets/images/Image-08.jpg';
import imgUser11 from '../../assets/images/ava-4.jpg';
import imgUser12 from '../../assets/images/ava-3.jpg';
import imgUser13 from '../../assets/images/ava-2.jpg';
import imgUser14 from '../../assets/images/ava-1.jpg';










const ExplorePeople = () => {

    const [follow, setFollow] = useState(false)



    return (
        <>
            <section className={styles.explorePeople}>

                <div className={styles.descPage}>
                    <p>الاقتراحات</p>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    rawdamohamed459
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Rawda mohamed</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    abdel_rahmanelfayomy
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>عبدالرحمن الفيومي</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    s__ss_xx
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            {/* <p>a84253041</p> */}
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    abdelrahman_shalata_29
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Abd Elrahman Shalata</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    elfauomy69
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Mohamed Elfauomy</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    abdelrahman_shalata_29
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Abd Elrahman Shalata</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    a7med.mo7med.6
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>AHMED</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    alaunwundya
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>مًحًمًوٌدٍ آلَعٌوٌضيَ</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
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



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    ali_adel70
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Ali Adel</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser8} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    bdlmjyd1631
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>محمد مجدى</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser9} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    mohamed_rabi3___
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>R¹</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser10} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <span><HiMiniCheckBadge /></span>
                                    sakryahiamo
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Yahia Mo Sakr</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser11} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    kareem_fadl01
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>Kareem Fadl</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser12} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    a84253041
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>a84253041</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser13} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.user}>
                    <div className={styles.divBtnFollow}>
                        {
                            follow === true ?
                                <button className={styles.btnIFollow} onClick={() => setFollow(false)}>
                                    أتابع
                                </button> :
                                <button className={styles.btnFollow} onClick={() => setFollow(true)}>
                                    متابعة
                                </button>
                        }
                    </div>

                    <div className={styles.nameAndImg}>
                        <div className={styles.nameUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    {/* <span><HiMiniCheckBadge /></span> */}
                                    a84253041
                                </Link>

                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                            <p>a84253041</p>
                            <p>اقتراحات قد تعجبك </p>
                        </div>

                        <div className={styles.imgMyUser}>
                            <div className={styles.hover}>
                                <Link to="">
                                    <img src={imgUser14} alt="" />
                                </Link>
                                {/* ==== start of haver user ==== */}
                                <div className={styles.userProfile}>
                                    <HoverUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                {/* ==== start of footer Explore People ==== */}
                <div className={styles.footerSuggestion} >

                    <div className={styles.links}>
                        <Link to=""> الوظائف </Link>
                        <Link to="">واجهة API</Link>
                        <Link to="">الصحافة</Link>
                        <Link to="">مساعدة</Link>
                        <Link to="">حول</Link>
                    </div>


                    <div className={styles.links}>
                        <Link to="">Meta Verified</Link>
                        <form action="">
                            <select name="language" id="language">
                                <option value="language">اللغة</option>
                                <option value="Arabic">العربية</option>
                                <option value="English">English</option>
                                <option value="Francais">Francais</option>
                                <option value="Italian">Italian</option>
                                <option value="Arabic">العربية</option>
                                <option value="English">English</option>
                                <option value="Francais">Francais</option>
                                <option value="Italian">Italian</option>
                                <option value="Arabic">العربية</option>
                                <option value="English">English</option>
                                <option value="Francais">Francais</option>
                                <option value="Italian">Italian</option>
                            </select>
                        </form>
                        <Link to="">المواقع</Link>
                        <Link to="">الشروط</Link>
                        <Link to="">الخصوصية</Link>
                    </div>


                    {/* ==== start of copy Right ==== */}
                    <div className={styles.copyRight}>
                        <p>© 2024 INSTAGRAM FROM META</p>
                    </div>



                </div >
            </section>
        </>
    )
}

export default ExplorePeople;