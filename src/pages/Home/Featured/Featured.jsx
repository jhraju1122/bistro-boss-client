import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/img/6.jpg'
 import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item text-white">
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 pt-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, possimus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium incidunt optio odit asperiores molestias sequi. Illum iste voluptas sunt eaque saepe! Repudiandae quas optio alias mollitia sint ad vitae tenetur reiciendis quo quidem recusandae qui voluptate rerum, odit itaque facilis reprehenderit. Vero minus eius nobis earum enim ad distinctio!</p>
                <button className="btn btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;