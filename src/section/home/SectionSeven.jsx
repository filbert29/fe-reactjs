import { Container} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImg1 from '../../assets/image/swiper_img1.png'
import SwiperImg2 from '../../assets/image/swiper_img2.png'
import SwiperImg3 from '../../assets/image/swiper_img3.png'
import SwiperImg4 from '../../assets/image/swiper_img4.png'
import SwiperImg5 from '../../assets/image/swiper_img5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/styles/home.css'

// import required modules
import { Pagination } from 'swiper/modules';

const SectionSeven = () => {
    return (
        <>
            <Container sx={{maxWidth: {lg: "lg", md: "md", sm: "sm", xs: "sm"}, height: {lg: "200px"}}}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={SwiperImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SwiperImg3} alt="" /></SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
}

export default SectionSeven;