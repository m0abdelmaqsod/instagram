import React from 'react'
import styles from "./css/openFavorite.module.css"
import { FaRegStar } from "react-icons/fa";




const OpenFavorite = ({ setOpenFavorite }) => {
    return (
        <>
            <div className={styles.openFavorite}>
                <div className={styles.iconStar}>
                    <FaRegStar />
                </div>

                <h3>المفضلة</h3>

                <p>ستظهر المنشورات الجديدة من المفضلة في أعلى الموجز.</p>
                <div className={styles.btnCloseFavorite}>
                    <button onClick={() => setOpenFavorite(false)}>موافق</button>
                </div>
            </div>
        </>
    )
}

export default OpenFavorite