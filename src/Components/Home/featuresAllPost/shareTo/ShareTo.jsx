import React, { useState } from 'react'
import styles from "./css/shareTo.module.css"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BiQrScan } from "react-icons/bi";
import { PiLinkSimpleBold, PiArrowBendUpRightBold, PiMessengerLogoBold } from "react-icons/pi";





const ShareTo = ({ setOptions, showSharingTo, setShowSharingTo }) => {



    //* ==== Remove post from favorites ==== *//
    const handleAllOption = () => {
        setOptions(false)
        setShowSharingTo(false)
    }


    return (
        <>
            <section className={styles.shareTo}>

                <div className={styles.navSharing}>
                    <button onClick={handleAllOption}>X</button>
                    <h3>...مشاركة إلى</h3>
                </div>


                <div className={styles.divShareTo}>

                    <button>
                        <p>مشاركة علي فيسبوك</p>
                        <span><FaFacebookF /></span>
                    </button>

                    <button>
                        <p>Messenger مشاركة في</p>
                        <span><PiMessengerLogoBold /></span>
                    </button>

                    <button>
                        <p>twitter مشاركة علي</p>
                        <span><BsTwitterX /></span>
                    </button>

                    <button>
                        <p>مشاركة عبر البريد الالكتروني</p>
                        <span><FiMail /></span>
                    </button>

                    <button>
                        <p>رمز QR</p>
                        <span><BiQrScan /></span>
                    </button>

                    <button>
                        <p>نسخ الرابط</p>
                        <span><PiLinkSimpleBold /></span>
                    </button>

                    <button>
                        <p>عرض الكل</p>
                        <span><PiArrowBendUpRightBold /></span>
                    </button>

                    <button onClick={handleAllOption}>
                        <p>إلغاء</p>
                        <span>  </span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default ShareTo