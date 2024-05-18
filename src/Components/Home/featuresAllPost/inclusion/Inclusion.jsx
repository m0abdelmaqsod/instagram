import React from 'react';
import styles from './css/inclusion.module.css';
import { Link } from 'react-router-dom';













const Inclusion = () => {



    return (
        <>
            <section className={styles.inclusion}>
                <form action="">

                    <div className={styles.pInclusion}>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda magni, aperiam eum incidunt rem perferendis omnis voluptatum nihil ex recusandae laborum suscipit sed voluptate. Qui soluta possimus id fugit nostrum iusto, blanditiis quo modi odio repellat officiis odit delectus rem reprehenderit, unde perspiciatis labore ipsum inventore saepe excepturi sapiente ratione? Laudantium nisi tempore ducimus provident, excepturi, voluptatibus eius cupiditate doloribus illum commodi perspiciatis aliquam numquam quod iure magnam veniam fugit corporis voluptates porro laboriosam consequuntur rerum ex repudiandae. Est vitae, natus quam veritatis iusto voluptas rem debitis atque nihil rerum nemo quia! Culpa quae hic beatae dolorem inventore ea eaque facere distinctio alias ullam, officiis excepturi ex rerum minima soluta fuga vitae labore maiores quod adipisci explicabo a nemo at! Numquam culpa temporibus aperiam et necessitatibus saepe omnis molestiae. Ex, beatae maxime perspiciatis laborum deserunt fuga quaerat expedita. Odio voluptates eligendi quaerat similique sapiente quisquam, eum libero mollitia ea eaque architecto rerum consequatur aperiam. Vero veniam fugit perspiciatis? Sequi illo .</span>
                    </div >



                    <div className={styles.checkOk}>
                        <label htmlFor="IncludeExplanation">تضمين شرح</label>
                        <input type="checkbox" name="IncludeExplanation" id="IncludeExplanation" />
                    </div>
                </form >

                <button>نسخ رمز التضمين</button>
                <p>باستخدام هذا التضمين، فإنك توافق على <Link to=''>شروط استخدام API</Link>  .Instagram الخاصة بتطبيق </p>
            </section >
        </>
    )
}

export default Inclusion