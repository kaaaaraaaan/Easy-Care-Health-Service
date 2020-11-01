import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";




const ContactPage = () => (

    <Layout pageTitle="Easy Care | Contact us">
        <NavOne />

        <PageHeader title="Contact" />
        <ContactInfo />
        <ContactMap />

        <Footer />

    </Layout>

)

export default ContactPage;