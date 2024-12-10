import React, { useEffect, useState } from 'react';
import styles from './css/componentSinglePost.module.css'
import { Link } from 'react-router-dom';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";
import { BsChat } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import HoverSave from '../hoverSave/HoverSave';
import OpenFavorite from '../../all_post/openFavorite/OpenFavorite';
import OptionsPost from '../optionsPost/OptionsPost';
import HoverUser from '../../hoverProfile/HoverUser';
import UnFollow from '../unFollow/UnFollow';
import AllLike from '../allLike/AllLike';
import SharingPost from '../sharingPost/SharingPost';
import axios from 'axios';
import { comments_post } from '../../../../../data';







import imgUserLike1 from '../../../../assets/images/Image-06.jpg';
import imgUserLike2 from '../../../../assets/images/ava-1.jpg';
import imgUserLike3 from '../../../../assets/images/Image-01.jpg';

import imgUserComm from '../../../../assets/images/Image-03.jpg';



const ComponentSinglePost = ({ item, allComm, setComponentSinglePost, componentSinglePost }) => {

    const { userName, imgUser, investigator, timePost, imgPost, descPost, allLike } = item;

    const commentsPost = [...comments_post];


    const [options, setOptions] = useState(false);
    const [optionComm, setOptionComm] = useState(false);
    const [optSinglePost, setOptSinglePost] = useState(false);

    // ==== handle btn like Post and save Post
    const [likePost, setLikePost] = useState(false);
    const [showHeartImg, setShowHeartImg] = useState(false);
    const [likeComments, setLikeComments] = useState(false);
    const [savePost, setSavePost] = useState(false);


    // ==== handle btn Show likes Post or likes comments
    const [showAllLikes, setShowAllLikes] = useState(false)

    // ==== handle btn Show Sharing Post
    const [showSharing, setShowSharing] = useState(false)


    // ==== Add the post to favorites ==== //
    const [favorite, setFavorite] = useState(false);
    const [openFavorite, setOpenFavorite] = useState(false);

    // console.log(favorite);

    // ==== state form post comment ==== //
    let nameUserComm = `@${userName} `;

    const [comment, setComment] = useState("");

    // console.log(showHeartImg);


    // ==== state un follow and follow ==== //
    const [unFollow, setUnFollow] = useState(false);

    // console.log(unFollow);


    // ==== handle options comment  ==== //
    const handleOptionComm = () => {
        setOptions(true)
        setOptionComm(true)
    }

    // ==== handle Option Single Post  ==== //
    const handleOptionSinglePost = () => {
        setOptions(true)
        setOptSinglePost(true)
    }



    // ==== handle on Double Click Img ==>> Heart❤️ ==== //
    const handleHeartImg = () => {
        setShowHeartImg(true)
        setLikePost(true)
        setTimeout(() => {
            setShowHeartImg(false)
        }, 600);
    }





    return (
        <section className={componentSinglePost === false ? styles.none : styles.componentSinglePost}>


            <div className={styles.btnCloseSinglePost}>
                <button onClick={() => setComponentSinglePost(false)}>X</button>
            </div>




            {/* ==== start of divSinglePost==== */}
            <div className={styles.divSinglePost}>

                {/* ==== start of divDataPost==== */}
                <div className={styles.divDataPost}>



                    {/* ==== start of nav post ==== */}
                    <div className={styles.nav_post}>

                        <div className={styles.btnToggleAndFavorite}>
                            <button className={styles.toggle} onClick={handleOptionSinglePost}>
                                <HiOutlineDotsHorizontal />
                            </button>


                            {/* ==== المفضلة ==== */}
                            {/* ==== open div Favorite ==== */}
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
                            <OptionsPost
                                setOptions={setOptions}
                                favorite={favorite}
                                setFavorite={setFavorite}
                                optionComm={optionComm}
                                setOptionComm={setOptionComm}
                                optSinglePost={optSinglePost}
                                setOptSinglePost={setOptSinglePost}
                            />
                        </div>

                        <div className={styles.data_user}>
                            <div className={styles.divFollow}>
                                <button onClick={() => setUnFollow(true)}>
                                    أتابع
                                </button>
                                <p className={styles.dot}>
                                    <RxDotFilled />
                                </p>
                            </div>

                            {/* ==== الغاء المتابعة ==== */}
                            {/* ==== start of un Follow ==== */}
                            <div className={unFollow === true ? styles.openUnFollow : styles.noneOptions}>
                                {/* ==== animation zoom open un Follow ==== */}
                                <div className={styles.zoomOpUnFoll}>
                                    <div className={styles.unFollow}>
                                        <UnFollow setUnFollow={setUnFollow} setOptions={setOptions} />
                                    </div>
                                </div>
                            </div>



                            <div className={styles.nameUserPost}>
                                <div className={styles.hover}>
                                    <Link to="">
                                        {
                                            investigator === true ? <span><HiMiniCheckBadge /></span> : ""
                                        }
                                        {userName}
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












                    {/* ==== start of all_data_post ==== */}
                    <div className={styles.all_data_post}>
                        {/*==== start of description And Comments post ====*/}
                        <div className={styles.descAndComm}>

                            {/*==== start of name user post And description post and images ====*/}
                            <div className={styles.allDesc}>
                                <div className={styles.nameAndDesc}>
                                    <div className={styles.hoverProfile}>
                                        <div className={styles.date}>
                                            <p>{timePost}</p>
                                        </div>
                                        <div className={styles.hover}>
                                            <Link to="">
                                                {
                                                    investigator === true ? <span><HiMiniCheckBadge /></span> : ""
                                                }
                                                {userName}
                                            </Link>

                                            {/* ==== start of haver user ==== */}
                                            <div className={styles.userProfile}>
                                                <HoverUser />
                                            </div>
                                        </div>
                                    </div>


                                    <p>{descPost}</p>


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





                            {/*==== start of div Comments post ====*/}
                            {
                                allComm.map((item, index) => (
                                    <div className={styles.divComments} key={index}>

                                        <div className={styles.btnHeart}>
                                            <button className={likeComments === true ? styles.heartCommNone : ""} onClick={() => setLikeComments(true)}><FaRegHeart /></button>


                                            <button className={likeComments === false ? styles.heartCommNone : styles.heartRed} onClick={() => setLikeComments(false)}><FaHeart /></button>
                                        </div>

                                        <div className={styles.nameAndDesc}>
                                            <div className={styles.hoverProfile}>
                                                <div className={styles.date}>
                                                    <p>{item.timePost}</p>
                                                </div>
                                                <div className={styles.hover}>
                                                    <Link to="">
                                                        {
                                                            item.investigator === true ? <span><HiMiniCheckBadge /></span> : ""
                                                        }
                                                        {item.userName}
                                                    </Link>

                                                    {/* ==== start of haver user ==== */}
                                                    <div className={styles.userProfile}>
                                                        <HoverUser />
                                                    </div>
                                                </div>
                                            </div>


                                            <p>{item.commandPost}</p>


                                            {/* ==== التفاعل مع التعليق ==== */}
                                            {/* ==== Interact with comment ==== */}
                                            <div className={styles.interactWithComm}>
                                                <button className={styles.toggle} onClick={handleOptionComm}>
                                                    <HiOutlineDotsHorizontal />
                                                </button>

                                                <button>
                                                    <label htmlFor="comm" onClick={() => setComment(nameUserComm)}>رد</label>
                                                </button>

                                                <button onClick={() => setShowAllLikes(true)}>
                                                    تسجيل إعجاب
                                                    <span> {item.allLike}</span>
                                                </button>
                                            </div>
                                        </div>


                                        <div className={styles.div_img}>
                                            <div className={styles.hover}>
                                                <Link to="">
                                                    <img src={item.imgUser} alt="" />
                                                </Link>
                                                {/* ==== start of haver user ==== */}
                                                <div className={styles.userProfile}>
                                                    <HoverUser />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        {
                            <AllLike setShowAllLikes={setShowAllLikes} showAllLikes={showAllLikes} />
                        }



                        <div className={styles.divInfo}>
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
                                        {
                                            savePost === false ?
                                                <button onClick={() => setSavePost(true)}>
                                                    <BsBookmark />
                                                </button>
                                                : <button onClick={() => setSavePost(false)}>
                                                    <BsBookmarkFill />
                                                </button>
                                        }
                                    </div>
                                </div>



                                {/* ==== التفاعل ==== */}
                                {/* ==== start of interaction ==== */}
                                <div className={styles.interaction}>
                                    <button onClick={() => setShowSharing(true)}><PiPaperPlaneTilt /></button>
                                    <button>
                                        <label htmlFor="comm"><BsChat /></label>
                                    </button>
                                    <button className={likePost === true ? styles.heart : ""} onClick={() => setLikePost(true)}><FaRegHeart /></button>


                                    <button className={likePost === false ? styles.heart : styles.heartRed} onClick={() => setLikePost(false)}><FaHeart /></button>
                                </div>
                            </div>





                            {/* ==== start of Sharing Post ==== */}
                            <SharingPost setShowSharing={setShowSharing} showSharing={showSharing} />


                            <div className={styles.info_post}>

                                <div className={styles.divLike}>
                                    <button className={styles.like} onClick={() => setShowAllLikes(true)}>
                                        {allLike} تسجيل إعجاب
                                    </button>
                                    <div className={styles.divImgLike}>
                                        <div className={styles.divImg}>
                                            <img src={imgUserLike1} alt="" />
                                        </div>
                                        <div className={styles.divImg}>
                                            <img src={imgUserLike2} alt="" />
                                        </div>
                                        <div className={styles.divImg}>
                                            <img src={imgUserLike3} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.divDate}>
                                    <Link to="">
                                        منذ  {timePost}
                                    </Link>
                                </div>
                            </div>





                            {/* ==== start of form ==== */}
                            <form action="">
                                <div className={styles.btn_form}>
                                    <button className={styles.emoji}>
                                        <CiFaceSmile />
                                    </button>

                                    <button className={comment.length === 0 ? styles.publishNone : styles.publish}>
                                        نشر
                                    </button>
                                </div>
                                <textarea id='comm' value={comment} onChange={(e) => setComment(e.target.value)} name="comment" placeholder='....اضافه تعليق'></textarea>

                                <div className={styles.divImg}>
                                    <img src={imgUserComm} alt="" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




                {/* ==== start of divImgPost==== */}
                <div className={styles.divImgPost}>
                    <div className={showHeartImg === true ? styles.iconLike : styles.noneIcon}>
                        <p >
                            <FaHeart />
                        </p>
                    </div>

                    <img onDoubleClick={handleHeartImg} src={imgPost} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ComponentSinglePost