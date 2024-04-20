import AboutSection from "../AboutSection/AboutSection";
import BlogSection from "../BlogSection/BlogSection";
import Client from "../Client/Client";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import Slider from "../Slider/Slider";
import SpecialSection from "../SpecialSection/SpecialSection";
import Subscription from "../Subscription/Subscription";
import TeamSection from "../TeamSection/TeamSection";
import Testimonial from "../Testimonial/Testimonial";
import {Helmet} from "react-helmet-async";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Aya</title>
            </Helmet>
            <Slider></Slider>
            <AboutSection></AboutSection>
            <SpecialSection></SpecialSection>
            <ServiceSection></ServiceSection>
            <PortfolioSection></PortfolioSection>
            <BlogSection></BlogSection>
            <Testimonial></Testimonial>
            <TeamSection></TeamSection>
            <Client></Client>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;