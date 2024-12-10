import React, { useState } from 'react';
import styles from './css/sharingPost.module.css'
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";




import imgUser1 from '../../../../assets/images/ava-4.jpg'
import imgUser2 from '../../../../assets/images/ava-2.jpg'
import imgUser3 from '../../../../assets/images/ava-1.jpg'



const SharingPost = ({ showSharing, setShowSharing }) => {

    const [shareTo, setShareTo] = useState(false)


    const handleShareTo = () => {
        setShareTo((prev) => !prev)
    }

    // console.log(shareTo);






    return (
        <>
            <section>
                <div className={showSharing === true ? styles.sharingPost : styles.noneSharingPost}>
                    <div className={styles.divSharingPost}>
                        <div className={styles.openSharingPost}>



                            <div className={styles.navSharing}>
                                <button onClick={() => setShowSharing(false)}>X</button>
                                <h3>مشاركة</h3>
                            </div>



                            <div className={styles.formSearch}>
                                <div className={styles.formAndName}>
                                    <form action="">
                                        <input type="text" name='search' id='search' placeholder='...بحث' />
                                    </form>

                                    {/* ==== المستخدم المحدد ==== */}
                                    {/*<div className={styles.divSpecified}>
                                        <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>ahmedMoha..</p>
                                        </div>
                                         <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>Mohamed</p>
                                        </div>
                                        <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>ahmedMohamed</p>
                                        </div>
                                        <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>ahmedMohamed</p>
                                        </div>
                                        <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>ahmedMohamed</p>
                                        </div>
                                        <div className={styles.specifiedUser}>
                                            <button>X</button>
                                            <p>ahmedMohamed</p>
                                        </div> 
                                    </div>*/}

                                </div>

                                <h3>:إلى</h3>
                            </div>


                            <div className={shareTo === true ? styles.animaAllUser : styles.scrollAllUser}>
                                <h3>الاقتراحات</h3>

                                <div className={styles.divInfoUser} onClick={handleShareTo}>
                                    <div className={styles.checkboxSharing}>
                                        <div className={shareTo === true ? styles.bgCheckbox : styles.circleCheckbox}>

                                            <div className={shareTo === true ? styles.check : styles.noneCheck}>
                                                <FaCheck />
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.data_user}>
                                        <div className={styles.nameUserPost}>
                                            <h5>
                                                smsm
                                            </h5>

                                            <p>smsm</p>
                                        </div>

                                        <div className={styles.div_img}>
                                            <img src={imgUser1} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.divInfoUser} onClick={handleShareTo}>
                                    <div className={styles.checkboxSharing}>
                                        <div className={shareTo === true ? styles.bgCheckbox : styles.circleCheckbox}>

                                            <div className={shareTo === true ? styles.check : styles.noneCheck}>
                                                <FaCheck />
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.data_user}>
                                        <div className={styles.nameUserPost}>
                                            <h5>
                                                ahmed
                                            </h5>

                                            <p>ahmed</p>
                                        </div>

                                        <div className={styles.div_img}>
                                            <img src={imgUser3} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.divInfoUser} onClick={handleShareTo}>
                                    <div className={styles.checkboxSharing}>
                                        <div className={shareTo === true ? styles.bgCheckbox : styles.circleCheckbox}>

                                            <div className={shareTo === true ? styles.check : styles.noneCheck}>
                                                <FaCheck />
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.data_user}>
                                        <div className={styles.nameUserPost}>
                                            <h5>
                                                <span><HiMiniCheckBadge /></span>
                                                mohamed
                                            </h5>

                                            <p>mohamed</p>
                                        </div>

                                        <div className={styles.div_img}>
                                            <img src={imgUser2} alt="" />
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.divInfoUser} onClick={handleShareTo}>
                                    <div className={styles.checkboxSharing}>
                                        <div className={shareTo === true ? styles.bgCheckbox : styles.circleCheckbox}>

                                            <div className={shareTo === true ? styles.check : styles.noneCheck}>
                                                <FaCheck />
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.data_user}>
                                        <div className={styles.nameUserPost}>
                                            <h5>
                                                ahmed
                                            </h5>

                                            <p>ahmed</p>
                                        </div>

                                        <div className={styles.div_img}>
                                            <img src={imgUser3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.divForm}>
                                <form action="" className={shareTo === true ? styles.animaForm : styles.form}>
                                    <input type="text" placeholder='....اكتب رسالة' />
                                </form>


                                <div className={shareTo === true ? styles.btnSend : styles.btnSendOpacity}>
                                    <button>إرسال</button>
                                    {/* <button>إرسال بشكل منفصل</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SharingPost