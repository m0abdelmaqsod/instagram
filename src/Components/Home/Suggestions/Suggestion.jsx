import React, { useState } from 'react';
import styles from './css/suggestion.module.css';
import { Link } from 'react-router-dom';
import HoverUser from '../hoverProfile/HoverUser';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoCheckmarkSharp } from "react-icons/io5";



import img1 from '../../../assets/images/20220513202816_IMG_4464.jpg';
import img2 from '../../../assets/images/ava-1.jpg';
import img3 from '../../../assets/images/ava-2.jpg';
import img4 from '../../../assets/images/ava-3.jpg'
import img5 from '../../../assets/images/ava-4.jpg'
import img6 from '../../../assets/images/Image-05.jpg'



const Suggestion = () => {

    // ==== start of button show && hide password ==== //
    const [openSwitch, setOpenSwitch] = useState(false);
    const [registAccount, setRegistAccount] = useState(false);
    const [showPass, setShowPass] = useState(false);


    // ==== start of on Change input form password && email ==== //
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // console.log(email);

    const handleCloseSwitch = () => {
        setOpenSwitch(false);
        setRegistAccount(false);
    }

    // ==== handle click form ==== //
    const handleForm = (e) => {
        e.preventDefault()
    }



    const handleShowPass = () => {
        setShowPass(true);
    }

    const handleHidePass = () => {
        setShowPass(false);
    }





    return (
        <>
            {/* ==== اقتراحات ==== */}
            {/* ==== start of suggestion ==== */}
            <div className={styles.suggestion}>
                {/* ==== start of all suggestion ==== */}
                <div className={styles.allSuggestion}>

                    {/* ==== start of myUser ==== */}
                    <div className={styles.myUser}>
                        <button onClick={() => setOpenSwitch(true)}> التبديل</button>



                        {/* ==== start of switch Account ==== */}
                        <div className={openSwitch === true ? styles.switchAccount : styles.none_switchAccount}>

                            {/* ==== start of div switch ==== */}
                            <div className={registAccount === false ? styles.divSwitch : styles.none_switchAccount}>

                                <div className={styles.navSwitch}>
                                    <button onClick={() => setOpenSwitch(false)}>X</button>
                                    <p>تبديل الحسابات</p>
                                </div>

                                <div className={styles.allUserSwitch}>
                                    <div className={styles.div_user}>
                                        <button>
                                            <span><IoCheckmarkSharp /></span>
                                        </button>


                                        <div className={styles.info_user}>
                                            <p>moabdelmaqsod</p>
                                            <div className={styles.div_img}>
                                                <img src={img1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ==== الحساب الحالي ==== */}
                                <div className={styles.existing}>
                                    <button onClick={() => setRegistAccount(true)}>تسجيل الدخول الي حساب حالي</button>
                                </div>
                            </div>


                            {/* ==== start of div regist existing account ==== */}
                            <div className={registAccount === true ? styles.regist_exist_account : styles.none_switchAccount}>
                                <button onClick={handleCloseSwitch}>X</button>

                                <div className={styles.form}>
                                    <h3>
                                        <Link to="/">Instagram</Link>
                                    </h3>

                                    <form action="" onClick={handleForm}>
                                        <div className={styles.inputForm}>

                                            <div className={styles.email}>
                                                <input type="email" value={email} name='email' required placeholder='رقم الهاتف او اسم المستخدم او البريد الاليكتروني' onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div className={styles.pass}>
                                                <button className={password.length === 0 ? styles.noneShow : showPass === true ? styles.noneShow : ""} onClick={handleShowPass}>عرض</button>

                                                <button className={password.length === 0 ? styles.noneShow : showPass === false ? styles.noneShow : ""} onClick={handleHidePass}>اخفاء</button>

                                                <input type={showPass === true ? "name" : "password"} name='password' required value={password} placeholder='كلمة السر' onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className={styles.checkbox}>
                                            <label htmlFor="saveLoginData">حفظ بيانات تسجيل الدخول</label>
                                            <input type="checkbox" id='saveLoginData' name='saveLoginData' placeholder='كلمة السر' />
                                        </div>

                                        <div className={styles.signIn}>
                                            <button>تسجيل الدخول</button>
                                        </div>
                                    </form>


                                    <div className={styles.btnForgotPass}>
                                        <Link to="">هل نسيت كلمة السر؟</Link>
                                    </div>
                                </div>
                            </div>
                        </div>











                        {/* ==== start of user ==== */}
                        <div className={styles.user}>
                            <div className={styles.nameUser}>
                                <Link to="">moabdelmaqsod</Link>
                                <p>moabdelmaqsod </p>
                            </div>

                            <div className={styles.imgMyUser}>
                                <Link to="">
                                    <img src={img1} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div >



                    {/* ==== start of Other ==== */}
                    <div className={styles.Other} >
                        <Link to="ExplorePeople">عرض الكل</Link>
                        <h4>اقتراحات قد تعجبك</h4>
                    </div >




                    {/* ==== start of other users ==== */}
                    <div className={styles.other_users} >
                        <button to=""> متابعة</button>

                        <div className={styles.user}>
                            <div className={styles.nameUser}>
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
                                <p>اقتراحات قد تعجبك </p>
                            </div>

                            <div className={styles.imgMyUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        <img src={img2} alt="" />
                                    </Link>
                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


                    {/* ==== start of other users ==== */}
                    <div className={styles.other_users} >
                        <button> متابعة</button>

                        <div className={styles.user}>
                            <div className={styles.nameUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        {/* <span><HiMiniCheckBadge /></span> */}
                                        fatma
                                    </Link>

                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                                <p>اقتراحات قد تعجبك </p>
                            </div>

                            <div className={styles.imgMyUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        <img src={img3} alt="" />
                                    </Link>
                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


                    {/* ==== start of other users ==== */}
                    <div className={styles.other_users} >
                        <button> متابعة</button>

                        <div className={styles.user}>
                            <div className={styles.nameUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        {/* <span><HiMiniCheckBadge /></span> */}
                                        omar_gamall20
                                    </Link>

                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                                <p>اقتراحات قد تعجبك </p>
                            </div>

                            <div className={styles.imgMyUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        <img src={img4} alt="" />
                                    </Link>
                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >



                    {/* ==== start of other users ==== */}
                    <div className={styles.other_users} >
                        <button> متابعة</button>

                        <div className={styles.user}>
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
                                <p>اقتراحات قد تعجبك </p>
                            </div>


                            <div className={styles.imgMyUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        <img src={img5} alt="" />
                                    </Link>
                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


                    {/* ==== start of other users ==== */}
                    <div className={styles.other_users} >
                        <button> متابعة</button>

                        <div className={styles.user}>
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
                                <p>اقتراحات قد تعجبك </p>
                            </div>


                            <div className={styles.imgMyUser}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        <img src={img6} alt="" />
                                    </Link>
                                    {/* ==== start of haver user ==== */}
                                    <div className={styles.userProfile}>
                                        <HoverUser />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


                    {/* ==== start of footer Suggestion ==== */}
                    <div className={styles.footerSuggestion} >
                        <div className={styles.links}>
                            <Link to=""> الوظائف </Link>.
                            <Link to="">واجهة API</Link>.
                            <Link to="">الصحافة</Link>.
                            <Link to="">مساعدة</Link>.
                            <Link to="">حول</Link>.
                        </div>

                        <div className={styles.links}>
                            <Link to="">Meta Verified</Link>.
                            <Link to="">اللغة</Link>.
                            <Link to="">المواقع</Link>.
                            <Link to="">الشروط</Link>.
                            <Link to="">الخصوصية</Link>.
                        </div>


                        <div className={styles.copyRights}>
                            <p>© 2024 INSTAGRAM FROM META</p>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default Suggestion