import React from 'react'
import styles from './css/home.module.css'
import Stories from '../../Components/Home/stories/Stories';
import Suggestion from '../../Components/Home/Suggestions/Suggestion';
import AllPost from '../../Components/Home/all_post/AllPost';
import { data_post } from '../../../data';
import NavHomeResponsive from '../../Components/Home/NavHome/NavHomeResponsive';


const Home = () => {


    const data = [...data_post]




    return (
        /* ==== start of home ==== */
        <section className={styles.home}>



            {/* ==== start of Nav Home Responsive ==== */}
            <div className={styles.divNavHomeResponsive}>
                <NavHomeResponsive/>
            </div>


            {/* ==== اقتراحات ==== */}
            {/* ==== start of suggestion ==== */}
            <div className={styles.divSuggestion}>
                <Suggestion />
            </div>


            {/* ==== start of stories posts ==== */}
            <div className={styles.stories_posts}>

                {/* ==== start of stories ==== */}
                <div className={styles.divStories}>
                    <Stories />
                </div>




                {/* ==== start of all post ==== */}
                <div className={styles.allPosts}>
                    {
                        data.map((item, index) => (
                            <AllPost key={index} item={item} />
                        ))
                    }
                </div>
            </div>





        </section>
    )
}

export default Home