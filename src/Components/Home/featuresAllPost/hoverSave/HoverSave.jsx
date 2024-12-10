import React, { useState } from 'react';
import styles from './css/hoverSave.module.css';




import imgSavePost1 from '../../../../assets/images/cat-post-3.jpg';
import imgSavePost2 from "../../../../assets/images/535e873b590c35bba7d354491a5a55a4.jpg";
import imgSavePost3 from "../../../../assets/images/e4c70a70d42588df1e33146f414c4d15.jpg";
import imgSavePost4 from "../../../../assets/images/Image-05.jpg";
import imgSavePost5 from '../../../../assets/images/post-img2.jpg';
import imgSavePost6 from '../../../../assets/images/post-img1.jpg';
import imgSavePost7 from '../../../../assets/images/m-blog-3.jpg';
import imgSavePost8 from '../../../../assets/images/blog2.png';




const HoverSave = () => {

    const [addGroup, setAddGroup] = useState();



    return (
        <>
            {/* ==== start of hoverSave ==== */}
            <section className={styles.hoverSave}>
                {/* ==== start of formations ==== */}
                <div className={styles.formations}>
                    <button>+</button>
                    <p>التشكيلات</p>
                </div>

                {/* ==== start of all groups ==== */}
                <div className={styles.allGroups}>

                    {/* ==== start of scroll group ==== */}
                    <div className={styles.scroll_group}>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost1} alt="" />
                                </div>
                                <p>برمجه</p>
                            </button>
                        </div>




                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost2} alt="" />
                                </div>
                                <p>CSS</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost3} alt="" />
                                </div>
                                <p>javascript</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost4} alt="" />
                                </div>
                                <p>صور</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost5} alt="" />
                                </div>
                                <p>react.js</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost6} alt="" />
                                </div>
                                <p>dfdf</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost7} alt="" />
                                </div>
                                <p>فرح</p>
                            </button>
                        </div>

                        {/* ==== start of group ==== */}
                        <div className={styles.group}>
                            <button>
                                <div className={styles.divImg}>
                                    <img src={imgSavePost8} alt="" />
                                </div>
                                <p>shaping</p>
                            </button>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default HoverSave