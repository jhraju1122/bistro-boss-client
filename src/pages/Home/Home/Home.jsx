import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

 
const Home = () => {
    return (
        <div>
             <Helmet>
                        <title>Bistro Boss | Home</title>             
             </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;