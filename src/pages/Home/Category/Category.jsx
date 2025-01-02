 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/img/5.jpg'
import slide2 from '../../../assets/img/6.jpg'
import slide3 from '../../../assets/img/7.jpg'
import slide4 from '../../../assets/img/8.jpg'
import slide5 from '../../../assets/img/9.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
  <section>
    <SectionTitle subHeading={"From 11.00am to 10.00pm"} 
    heading={"Order Online"}
    >

    </SectionTitle>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>malai</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-12 text-white'>Desert</h3>
        </SwiperSlide>
       
      </Swiper>
  </section>
    );
};

export default Category;