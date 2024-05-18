import React from 'react'
import styles from './css/home.module.css'
import Stories from '../../Components/Home/stories/Stories';
// import { Link } from 'react-router-dom';
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { HiMiniCheckBadge } from "react-icons/hi2";
// import { BsChat } from "react-icons/bs";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { PiPaperPlaneTilt } from "react-icons/pi";
// import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
// import { CiFaceSmile } from "react-icons/ci";
import Suggestion from '../../Components/Home/Suggestions/Suggestion';
import AllPost from '../../Components/Home/all_post/AllPost';



const Home = () => {
    return (
        /* ==== start of home ==== */
        <section className={styles.home}>

            {/* ==== اقتراحات ==== */}
            {/* ==== start of suggestion ==== */}
            <Suggestion />



            {/* ==== start of stories posts ==== */}
            <div className={styles.stories_posts}>

                {/* ==== start of stories ==== */}
                <Stories />


                {/* ==== start of all post ==== */}
                <AllPost />
                <AllPost />

            </div>





        </section>
    )
}

export default Home