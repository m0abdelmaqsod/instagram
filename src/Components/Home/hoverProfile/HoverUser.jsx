import React from 'react';
import './css/hoverUser.css';
import { Link } from 'react-router-dom';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { LiaFacebookMessenger } from "react-icons/lia";
// import { IoPersonAddOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { SlCamera } from "react-icons/sl";
import { HiOutlineLockClosed } from "react-icons/hi2";



import HoverImgUser from '../../../assets/images/ava-3.jpg';

import imgPostUser1 from '../../../assets/images/Image-01.jpg';
import imgPostUser2 from '../../../assets/images/blog2.png';
import imgPostUser3 from '../../../assets/images/ava-3.jpg';











const HoverUser = () => {



    return (
        <>
            {/* ==== start of hover user ==== */}
            <div className="hoverUser">

                {/* ==== start of profile user ==== */}
                <div className="profileUser">
                    <div className="nameUserPost">
                        <span><HiMiniCheckBadge /></span>
                        <Link to="">a84253041</Link>
                        <p>a84253041</p>
                    </div>

                    <div className="div_img">
                        <Link to="">
                            <img src={HoverImgUser} alt="" />
                        </Link>
                    </div>
                </div>


                {/* ==== start of user info ==== */}
                <div className="userInfo">
                    <div className="">
                        <p>21</p>
                        <p>اتابع</p>
                    </div>
                    <div className="">
                        <p>ألف 51</p>
                        <p>متابعون</p>
                    </div>
                    <div className="">
                        <p>91</p>
                        <p>منشورات</p>
                    </div>
                </div>


                {/* ==== start of all Img ==== */}
                <div className="allImg">
                    <div className="allData">
                        <Link to="">
                            <img src={imgPostUser1} alt="" />
                        </Link>

                        <Link to="">
                            <img src={imgPostUser2} alt="" />
                        </Link>

                        <Link to="">
                            <img src={imgPostUser3} alt="" />
                        </Link>
                    </div>

                    {/* <div className="noData">
                        <span className="icon">
                            <SlCamera/>
                        </span>
                        <h3>لم يتم نشر أي منشورات حتى الآن</h3>
                        <p>عند قيام a84253041 بمشاركة صور ومقاطع ريلز، ستراها هنا.</p>
                    </div> */}

                    {/* <div className="noData">
                        <span className="icon">
                            <HiOutlineLockClosed />
                        </span>
                        <h3>الحساب خاص</h3>
                        <p>تابع هذا الحساب لمشاهدة صوره ومقاطع الفيديو الخاصة به.</p>
                    </div> */}
                </div>


                {/* ==== start of btn Communication ==== */}
                <div className="btnCommunication">
                    <div className="follow">
                        <button >أتابع</button>
                    </div>

                    <div className="messaging">
                        <Link to=''>
                            <span>مراسلة</span>
                            <LiaFacebookMessenger />
                        </Link>
                    </div>

                    {/* <div className="follower">
                        <button>
                            <span>متابعة</span>
                            <FiUserPlus/>
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HoverUser