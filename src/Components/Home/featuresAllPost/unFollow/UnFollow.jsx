import React, { useState } from 'react';
import styles from './css/unFollow.module.css'




import imgUser from '../../../../assets/images/l-post-4.jpg'




const UnFollow = ({ setUnFollow, setOptions }) => {


    // * ==== start of handle close Un Follow ==== *//
    const closeUnFollow = () => {
        setUnFollow(false);
        setOptions(false);
    }






    return (
        <>
            <div className={styles.div_img}>
                <img src={imgUser} alt="" />
            </div>

            <p>؟<span>a84253041</span> هل تريد الغاء متابعة</p>


            <div className={styles.btnUnFollow}>
                <button onClick={closeUnFollow}>إلغاء المتابعة</button>
                <button onClick={closeUnFollow}>إلغاء</button>
            </div>
        </>
    )
}

export default UnFollow