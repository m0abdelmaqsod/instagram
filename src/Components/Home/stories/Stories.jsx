import React from 'react';
import styles from './css/stories.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';






import imgStories1 from '../../../assets/images/user.png';
import imgStories2 from '../../../assets/images/ava-2.jpg';
import imgStories3 from '../../../assets/images/ava-3.jpg';
import imgStories4 from '../../../assets/images/form.png';
import imgStories5 from '../../../assets/images/form2.png';
import imgStories6 from '../../../assets/images/ava-4.jpg';
import imgStories7 from '../../../assets/images/user.png';
import imgStories8 from '../../../assets/images/user.png';
import imgStories9 from '../../../assets/images/user.png';
import imgStories10 from '../../../assets/images/user.png';
import imgStories11 from '../../../assets/images/user.png';
import imgStories12 from '../../../assets/images/user.png';








const Stories = () => {
    return (
        <>
            <div className={styles.stories}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        200: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        375: {
                            slidesPerView: 4.5,
                            spaceBetween: 10,
                        },
                        400: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                        540: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 8.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 10,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 8,
                            spaceBetween: 10,
                        }
                    }}
                    modules={[Pagination]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories1} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories2} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories3} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories4} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories5} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories6} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories7} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories8} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories9} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories10} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories11} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Slide}>
                            <div className={styles.img_stories}>
                                <img src={imgStories12} alt="" />
                            </div>
                            <p className={styles.name_stories}>mohamed</p>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </>
    )
}

export default Stories