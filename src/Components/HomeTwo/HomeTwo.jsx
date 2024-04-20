import AboutSection from "../AboutSection/AboutSection";
import BannerOne from "../Banners/BannerOne";
import BlogSection from "../BlogSection/BlogSection";
import Client from "../Client/Client";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import SpecialSection from "../SpecialSection/SpecialSection";
import Subscription from "../Subscription/Subscription";
import TeamSection from "../TeamSection/TeamSection";
import Testimonial from "../Testimonial/Testimonial";
import {Helmet} from "react-helmet-async";
const HomeTwo = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Aya</title>
            </Helmet>
            <BannerOne></BannerOne>
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

export default HomeTwo;