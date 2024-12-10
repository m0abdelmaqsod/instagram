import React from 'react';
import styles from './css/aboutAccount.module.css';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { LuCalendarRange } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { Link } from 'react-router-dom';



import imgUser from '../../../../assets/images/m-blog-2.jpg';





const AboutAccount = ({ setAboutAccount,setOptions }) => {
    // * ==== start of handle close Un Follow ==== *//
    const closeAboutAccount = () => {
        setAboutAccount(false);
        setOptions(false);
    }


    return (
        <>
            <section className={styles.aboutAccount}>

                <div className={styles.divAboutAccount}>

                    <div className={styles.navAboutAcc}>
                        <p>حول هذا الحساب</p>
                    </div>

                    <div className={styles.infoAcc}>
                        <div className={styles.divImg}>
                            <img src={imgUser} alt="" />
                        </div>

                        <div className={styles.nameUser}>
                            <span><HiMiniCheckBadge /></span>
                            <h3>omar_gamall20</h3>
                        </div>



                        <p>للمساعدة في الحفاظ على مصداقية مجتمعنا، نعرض معلومات عن الحسابات على Instagram. <Link to=''>‏تعرف على سبب أهمية هذه المعلومات</Link>.‏</p>




                        <div className={styles.divInfo}>
                            <div className={styles.divDetails}>
                                <div className={styles.details}>
                                    <p>تاريخ الانضمام</p>
                                    <p>أغسطس ٢٠١٣</p>
                                </div>
                                <span><LuCalendarRange /></span>
                            </div>
                            <div className={styles.divDetails}>
                                <div className={styles.details}>
                                    <p>الحساب موجود في</p>
                                    <p>مصر</p>
                                </div>
                                <span><MdOutlineLocationOn /></span>
                            </div>
                            <div className={styles.divDetails}>
                                <div className={styles.details}>
                                    <p>تم التحقق</p>
                                    <p>مارس ٢٠١٧</p>
                                </div>
                                <span><TbRosetteDiscountCheck /></span>
                            </div>
                        </div>




                        <div className={styles.infoDiscountCheck}>
                            <p>يمكن أن يتم التحقق من الملفات الشخصية بواسطة Meta، استنادًا إلى نشاطها عبر منتجات Meta أو المستندات التي تقدمها. يتم عرض الشارات المُحقّقة على هذه الملفات الشخصية.</p>


                            <p>بعض الملفات الشخصية التي تم التحقق منها ملك شخص أو علامة تجارية أو كيان بارز، في حين أن الملفات الشخصية الأخرى مشترِكة في Meta Verified. <Link to=''>‎‎تعرف على المزيد</Link></p>
                        </div>
                    </div>



                    <div className={styles.btnJoinMeta}>
                        <button> Meta Verified انضمام إلى قائمة الانتظار في  </button>
                    </div>

                    <div className={styles.btnClose}>
                        <button onClick={closeAboutAccount}>إغلاق</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutAccount