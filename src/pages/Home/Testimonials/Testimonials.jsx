import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
 import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 
import slide1 from '../../../assets/img/1.png'
import slide2 from '../../../assets/img/2.png'
import slide3 from '../../../assets/img/3.png'
import slide4 from '../../../assets/img/4.png'
import slide5 from '../../../assets/img/4.png'
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
       <section>
        <SectionTitle
        subHeading="what our client say"
        heading="Testimonials"
        ></SectionTitle>

         <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
              >
                {
                    reviews.map(review => <SwiperSlide
                    key={review.id}
                    >
                   <div>
                    <p>{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                   </div>
                    </SwiperSlide>)
                }
              </Swiper>
       </section>
       
    );
};

export default Testimonials;