import React, { useState } from 'react'
import styles from './css/report.module.css';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";











const Report = ({ setOptions, report, setReport }) => {

    // * ==== start of handle close Un Follow ==== *//
    const closeReport = () => {
        setReport(false);
        setOptions(false);
    }





    return (
        <>
            {/* ==== start of report ابلاغ ==== */}
            <div className={report === true ? styles.report : styles.noneOpt}>
                <div className={styles.navReport}>
                    <button onClick={closeReport}>X</button>
                    <p>إبلاغ</p>
                </div>



                <div className={styles.btnReport}>
                    <h3>لماذا تقوم بالإبلاغ عن هذا المنشور؟</h3>
                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>محتوي غير مهم أو احتيالي</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>عُري أو نشاط جنسي</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>رموز أو خطاب يحض علي الكراهية</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>عنف أو منظمات خطرة</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>بيع سلع غير قانونية أو خاضعة لإشراف هيئة تنظيمية</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>إساءة أو مضايقة</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>انتهاك الحقوق الفكرية</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>انتحار أو إيزاء الزات</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>اضطرابات الأكل</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>محتوي غير مهم أو احتيالي</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>أدوية</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>معلومات زائفة</p>
                    </button>

                    <button>
                        <span><IoChevronBackOutline /></span>
                        <p>لا يعجبني فحسب</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Report