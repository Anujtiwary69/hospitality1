import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
// @ts-ignore
import { Navigation } from 'swiper'; // Import Navigation module
import 'swiper/css'; // Swiper base CSS

import styles from './RegionalHighlights.module.css';

const Discover = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DISCOVER: REGIONAL HIGHLIGHTS</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true} // Enable navigation arrows
                modules={[Navigation]} // Register Navigation module
                className={styles.carousel}
            >
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.image}></div>
                        <h3 className={styles.cardTitle}>Lorem Ipsum</h3>
                        <p className={styles.cardText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.image}></div>
                        <h3 className={styles.cardTitle}>Lorem Ipsum</h3>
                        <p className={styles.cardText}>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.image}></div>
                        <h3 className={styles.cardTitle}>Lorem Ipsum</h3>
                        <p className={styles.cardText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Discover;
