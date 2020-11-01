import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import BannerOne from "../components/BannerOne";
import CallToActionThree from "../components/CallToActionThree";
import AboutOne from "../components/AboutOne";
import FunFactOne from "../components/FunFactOne";
import ServiceOne from "../components/ServiceOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import Testimonial from "../components/Testimonial";


const Home = () => (

    <Layout pageTitle="Easy Care Health Service Pvt. Ltd">
        <NavOne />

        <BannerOne />
        <CallToActionThree />
        <AboutOne />
        <FunFactOne />
        <ServiceOne />
        <AboutTwo />
        <Testimonial />
        <Footer />

    </Layout>

)

export default Home;