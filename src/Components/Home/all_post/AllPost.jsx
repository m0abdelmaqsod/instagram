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
import AllLike from '../featuresAllPost/allLike/AllLike';
import SharingPost from '../featuresAllPost/sharingPost/SharingPost';
import ComponentSinglePost from '../featuresAllPost/componentSinglePost/ComponentSinglePost';
import { comments_post } from '../../../../data';





const AllPost = ({ item }) => {


    const { id, userName, imgUser, investigator, timePost, imgPost, descPost, allLike, tokenPost } = item;



    const commentsPost = [...comments_post];


    const allComm = commentsPost.filter((comm) => comm.tokenComm === tokenPost)

    // console.log(allComm.length);

    const [options, setOptions] = useState(false);

    // ==== handle btn like Post and save Post
    const [likePost, setLikePost] = useState(false);
    const [savePost, setSavePost] = useState(false);

    // ==== Add the post to favorites ==== //
    const [favorite, setFavorite] = useState(false);
    const [openFavorite, setOpenFavorite] = useState(false);

    const [comment, setComment] = useState("");

    const [idComm, setIdComm] = useState(null)

    // console.log(idComm);


    // ==== handle btn Show likes Post or likes comments
    const [showAllLikes, setShowAllLikes] = useState(false)



    // ==== handle btn Show Sharing Post
    const [showSharing, setShowSharing] = useState(false)


    // ==== handle Show Component Single Post
    const [componentSinglePost, setComponentSinglePost] = useState(false)



    const [lengthAllDesc, setLengthAllDesc] = useState(95);
    const [showAllDesc, setShowAllDesc] = useState(true);
    // descPost.slice(0, 95);

    // console.log(investigator);

    const [showHeartImg, setShowHeartImg] = useState(false);

    // ==== handle on Double Click Img ==>> Heart❤️ ==== //
    const handleHeartImg = () => {
        setShowHeartImg(true)
        setLikePost(true)
        setTimeout(() => {
            setShowHeartImg(false)
        }, 600);
    }










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
                            <p>{timePost}</p>
                            <p className={styles.dot}><RxDotFilled /></p>
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





                {/* ==== start of img post ==== */}
                <div className={styles.divImgPost}>
                    <div className={showHeartImg === true ? styles.iconLike : styles.noneIcon}>
                        <p >
                            <FaHeart />
                        </p>
                    </div>

                    <img onDoubleClick={handleHeartImg} src={imgPost} alt="" />
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
                            <button onClick={() => setShowSharing(true)}><PiPaperPlaneTilt /></button>
                            <button onClick={() => {
                                setComponentSinglePost(true)
                                setIdComm(id)
                            }}><BsChat /></button>

                            <button className={likePost === true ? styles.heart : ""} onClick={() => setLikePost(true)}><FaRegHeart /></button>


                            <button className={likePost === false ? styles.heart : styles.heartRed} onClick={() => setLikePost(false)}><FaHeart /></button>
                        </div>
                    </div>



                    {/* ==== start of Sharing Post ==== */}
                    <SharingPost setShowSharing={setShowSharing} showSharing={showSharing} />



                    {/* ==== start of component Single Post ==== */}
                    <ComponentSinglePost item={item} allComm={allComm} componentSinglePost={componentSinglePost} setComponentSinglePost={setComponentSinglePost} />





                    {/* ==== start of info_post ==== */}
                    <div className={styles.info_post}>
                        <button className={styles.like} onClick={() => setShowAllLikes(true)}> {allLike}<span> تسجيل إعجاب </span></button>

                        <div className={styles.desc}>
                            <div className={styles.hoverProfile}>
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
                            <span>{descPost.slice(0, lengthAllDesc)}</span>

                            {
                                descPost.length <= 95
                                    ? ''
                                    : showAllDesc === true
                                        ? <button
                                            onClick={() => {
                                                setLengthAllDesc(descPost.length)
                                                setShowAllDesc(false)
                                            }}><span>...</span> المزيد</button> : ""
                            }




                        </div>


                        <button className={styles.viewAllComm} onClick={() => {
                            // setComponentSinglePost(true)
                            setIdComm(id)
                        }}>عرض جميع التعليقات ({allComm.length})</button>


                        {/* ==== start of form ==== */}
                        <form action="">
                            <div className={styles.btn_form}>
                                <button className={styles.emoji}><CiFaceSmile /></button>
                                <button className={comment.length === 0 ? styles.publishNone : styles.publish}>نشر</button>
                            </div>
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" placeholder='....اضافه تعليق'></textarea>
                        </form>
                    </div>




                    {
                        <AllLike setShowAllLikes={setShowAllLikes} showAllLikes={showAllLikes} />
                    }
                </div>





            </div>
        </>
    )
}

export default AllPost