import About from "../About/About";
import Baner from "../Baner/Baner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Services from "../Services/Services";
import Faq from "./Faq/Faq";


const Home = () => {
    return (
        <div className="space-y-10">
            <Baner></Baner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Faq></Faq>
        </div>
    );
};

export default Home;