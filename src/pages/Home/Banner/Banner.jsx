import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img2 from '../../../assets/img/2.png'
import img3 from '../../../assets/img/3.png'
import img4 from '../../../assets/img/4.png'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
    </Carousel>
    );
};

export default Banner;