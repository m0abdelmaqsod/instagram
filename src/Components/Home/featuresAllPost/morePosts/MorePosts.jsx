import React from 'react';
import styles from './css/morePosts.module.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { HiSquare2Stack } from "react-icons/hi2";




import img1 from "../../../../assets/images/m-blog-5.jpg";
import img2 from "../../../../assets/images/bc11bb3fa366b2b19bf8cdbbd43079e7.jpg";
import img3 from "../../../../assets/images/ins-6.jpg";
import img4 from "../../../../assets/images/ins-3.jpg";
import img5 from "../../../../assets/images/ins-1.jpg";
import img6 from "../../../../assets/images/ins-2.jpg";





const MorePosts = () => {


    return (
        <>
            <section className={styles.morePosts}>
                <div className={styles.divMorePosts}>
                    <div className={styles.title}>
                        <Link to=""> mohamed </Link>
                        <p> المزيد من المنشورات من </p>
                    </div>


                    {/* ==== start of all More Posts ==== */}
                    <div className={styles.allMorePosts}>
                        {/* ==== start of single More Post ==== */}
                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img1} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>151</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>20</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img2} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>546</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>114</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img3} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>345</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>132</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img4} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>654</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>59</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img5} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>687</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>240</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.singleMorePost}>
                            {/* ==== start of div img ==== */}
                            <div className={styles.divImg}>
                                <img src={img6} alt="" />
                                <div className={styles.icon}>
                                    <HiSquare2Stack />
                                </div>
                            </div>

                            {/* ==== التفاعل ==== */}
                            {/* ==== start of div Interaction Icon ==== */}
                            <div className={styles.divInteractionIcon}>
                                <div>
                                    <span>428</span>
                                    <span><BsChatFill /></span>
                                </div>
                                <div>
                                    <span>1642</span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default MorePosts