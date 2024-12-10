import React from 'react';
import styles from './css/searchPages.module.css';








const SearchPages = () => {




    return (
        <>
            <section className={styles.searchPages}>
                <h3>بحث</h3>

                <form action="">
                    <input type="search" name='search' />
                </form>


                <div className={styles.allUserSearch}>
                    <p>الأحدث</p>


                    <div className={styles.requiredUser}>
                        <div className={styles.divImg}>
                            <img src={require('../../assets/images/l-post-4.jpg')} alt="" />
                        </div>


                        <div className={styles.nameAndInfo}>
                            <div className={styles.nameUser}>
                                <span><HiMiniCheckBadge /></span>
                                <h3>omar_gamall20</h3>
                            </div>
                        </div>
                    </div>




                    <p>لم يتم إجراء عمليات بحث مؤخرًا.</p>
                </div>
            </section>
        </>
    )
}

export default SearchPages