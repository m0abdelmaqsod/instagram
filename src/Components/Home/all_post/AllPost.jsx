import React, { useState } from 'react';
import styles from './css/allPost.module.css';
import { Link } from 'react-router-dom';
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { BsChat, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import HoverUser from '../hoverProfile/HoverUser';
import HoverSave from '../featuresAllPost/hoverSave/HoverSave'
import OptionsPost from '../featuresAllPost/optionsPost/OptionsPost';
import OpenFavorite from './openFavorite/OpenFavorite';





import imgUser from '../../../assets/images/ava-3.jpg';
import imgPost from '../../../assets/images/c2.jpg';






const AllPost = () => {

    const [options, setOptions] = useState(false);

    // ==== handle btn like Post and save Post
    const [likePost, setLikePost] = useState(false);
    const [savePost, setSavePost] = useState(false);

    // ==== Add the post to favorites ==== //
    const [favorite, setFavorite] = useState(false);
    const [openFavorite, setOpenFavorite] = useState(false);

    // console.log(favorite);

    const [comment, setComment] = useState("");
    // console.log(comment);



    return (
        <>
            {/* ==== start of all post ==== */}
            <div className={styles.all_post}>

                {/* ==== start of nav post ==== */}
                <div className={styles.nav_post}>


                    <div className={styles.btnToggleAndFavorite}>

                        <button className={styles.toggle} onClick={() => setOptions(true)}>
                            <HiOutlineDotsHorizontal />
                        </button>

                        {
                            favorite === false ? "" :
                                <button className={styles.favorite} onClick={() => setOpenFavorite(true)}>
                                    <FaStar />
                                </button>
                        }


                        <div className={openFavorite === false ? styles.noneOptions : styles.divOpenFavorite}>
                            {
                                <OpenFavorite setOpenFavorite={setOpenFavorite} />
                            }
                        </div>

                    </div>


                    <div className={options === false ? styles.noneOptions : styles.allOptionsPost}>
                        <OptionsPost setOptions={setOptions} setFavorite={setFavorite} favorite={favorite} />
                    </div>

                    <div className={styles.data_user}>
                        <div className={styles.date}>
                            <p>11 س</p>
                            <p className={styles.dot}><RxDotFilled /></p>
                        </div>


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
                        </div>

                        <div className={styles.div_img}>
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


                {/* ==== start of post ==== */}
                <div className={styles.post}>
                    <img src={imgPost} alt="" />
                </div>


                {/* ==== start of all_data_post ==== */}
                <div className={styles.all_data_post}>
                    {/* ==== start of icons ==== */}
                    <div className={styles.icons}>

                        {/* ==== start of save post ==== */}
                        <div className={styles.save}>

                            {/* ==== start of hover save post ==== */}
                            <div className={styles.hoverSavePost}>
                                <div>
                                    <HoverSave />
                                </div>
                                <span></span>
                            </div>

                            <div className={styles.btnSavePost}>
                                <button className={savePost === true ? styles.saveNone : ""} onClick={() => setSavePost(true)}><BsBookmark /></button>

                                <button className={savePost === false ? styles.saveNone : ""} onClick={() => setSavePost(false)}><BsBookmarkFill /></button>
                            </div>
                        </div>

                        {/* ==== التفاعل ==== */}
                        {/* ==== start of interaction ==== */}
                        <div className={styles.interaction}>
                            <button><PiPaperPlaneTilt /></button>
                            <button><BsChat /></button>

                            <button className={likePost === true ? styles.heart : ""} onClick={() => setLikePost(true)}><FaRegHeart /></button>


                            <button className={likePost === false ? styles.heart : styles.heartRed} onClick={() => setLikePost(false)}><FaHeart /></button>
                        </div>
                    </div>


                    {/* ==== start of info_post ==== */}
                    <div className={styles.info_post}>
                        <button className={styles.like}>69,340 تسجيل إعجاب</button>

                        <div className={styles.desc}>
                            <div className={styles.hoverProfile}>
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
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rem modi sit, minima quidem ullam aliquam, explicabo nisi, officiis quasi laudantium libero! Provident voluptas quasi ipsam, ullam animi eos eligendi.</p>
                            <button>المزيد</button>
                        </div>


                        <button className={styles.viewAllComm}>عرض جميع التعليقات (27)</button>


                        {/* ==== start of form ==== */}
                        <form action="">
                            <div className={styles.btn_form}>
                                <button className={styles.emoji}><CiFaceSmile /></button>
                                <button className={comment.length === 0 ? styles.publishNone : styles.publish}>نشر</button>
                            </div>
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" placeholder='....اضافه تعليق'></textarea>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AllPost