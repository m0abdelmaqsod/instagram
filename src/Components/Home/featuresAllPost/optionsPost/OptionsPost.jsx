import React, { useState } from 'react';
import styles from './css/optionsPost.module.css';
import { Link } from 'react-router-dom';
import Report from '../../featuresAllPost/reportPost/Report';
import UnFollow from '../unFollow/UnFollow';
import ShareTo from '../shareTo/ShareTo';
import Inclusion from '../inclusion/Inclusion';
import AboutAccount from '../aboutAccount/AboutAccount';




const OptionsPost = ({
    setOptions,
    favorite,
    setFavorite,
    optionComm,
    setOptionComm,
    optSinglePost,
    setOptSinglePost,
}) => {



    const [unFollow, setUnFollow] = useState(false);
    const [report, setReport] = useState(false);
    const [showSharingTo, setShowSharingTo] = useState(false);
    const [showInclusion, setShowInclusion] = useState(false);
    const [aboutAccount, setAboutAccount] = useState(false);


    // * ==== start of handle close Un Follow ==== *//
    // const closeUnFollow = () => {
    //     setUnFollow(false);
    //     setOptions(false);
    // }

    // * ==== start of handle close Un Follow ==== *//
    const handlePotPost = () => { }



    //* ==== Add the post to favorites ==== *//
    const handleAddFavorite = () => {
        setFavorite(true);
        setOptions(false);
    }

    //* ==== Remove post from favorites ==== *//
    const handleRemoveFavorite = () => {
        setFavorite(false);
        setOptions(false);
    }

    //* ==== open & close Sharing to post ==== *//
    const handleShearingTo = () => {
        setShowSharingTo(true)
    }

    //* ==== Remove post from favorites ==== *//
    const handleCloseOption = () => {
        setOptions(false)
        setOptionComm(false)
        setOptSinglePost(false)
        setShowSharingTo(false)
    }






    return (
        <>
            {/* ==== start of options Post ==== */}
            <section className={styles.optionsPost}>

                {/* ==== start of opt Post ==== */}
                <div className={showSharingTo === false ? styles.optPost : styles.noneOpt}>
                    <button onClick={() => setReport(true)}>إبلاغ</button>

                    <div className={optionComm === true ? styles.noneOpt : ''}>

                        <button className={styles.btnFollow} onClick={() => setUnFollow(true)}>إلغاء المتابعة</button>

                        {
                            favorite === false ?
                                <button onClick={handleAddFavorite}>إضافة إلي المفضلة</button> :
                                <button onClick={handleRemoveFavorite}>إزالة من المفضلة</button>
                        }

                        <div className={optSinglePost === true ? styles.noneOpt : ''} >
                            <button className={styles.goSinglePost}>
                                <Link to="/SinglePost/:id">انتقال إلي المنشور</Link>
                            </button>
                        </div>

                        <button onClick={() => setShowSharingTo(true)}> ....مشاركة إلي</button>

                        <button>نسخ الرابط</button>
                        <button onClick={() => setShowInclusion(true)}>تضمين</button>
                        <button onClick={() => setAboutAccount(true)}>حول هزا الحساب</button>
                    </div>

                    <button onClick={handleCloseOption}>إلغاء</button>
                </div>







                {/* ==== الغاء المتابعة ==== */}
                {/* ==== start of un Follow ==== */}
                <div className={unFollow === true ? styles.unFollow : styles.noneOpt}>
                    <UnFollow setUnFollow={setUnFollow} setOptions={setOptions} />
                </div>




                {/* ==== ابلاغ ==== */}
                {/* ==== start of report ==== */}
                <Report setOptions={setOptions} report={report} setReport={setReport} />



                <div className={showSharingTo === true ? styles.allSharingTo : styles.noneOpt}>
                    <ShareTo setOptions={setOptions} showSharingTo={showSharingTo} setShowSharingTo={setShowSharingTo} />
                </div>


                <div className={showInclusion === true ? styles.allInclusion : styles.noneOpt}>
                    <Inclusion />
                </div>



                <div className={aboutAccount === true ? styles.allAboutAccount : styles.noneOpt}>
                    <AboutAccount setAboutAccount={setAboutAccount} setOptions={setOptions} />
                </div>

            </section >
        </>
    )
}

export default OptionsPost;