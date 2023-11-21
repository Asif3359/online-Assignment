
import person1 from "../../../assets/images/banner/person.jpg"
import Book1 from "../../../assets/images/banner/book.jpg"

const About = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold text-orange-400">About Our Class </h1>
            </div>
            <div className="hero  bg-base-100  my-5">
                <div className="hero-content flex-col lg:flex-row justify-between items-end">
                    <div className="lg:w-1/2 relative">
                        <img src={person1} className="w-full lg:w-3/4 rounded-lg shadow-2xl" />
                        <img src={Book1} className=" border-8 border-white absolute w-2/5 bottom-0 lg:bottom-11 right-0 lg:right-20 lg:top-36  rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-1/2 space-y-2 px-1 text-right">
                        <h1 className="text-3xl font-bold">We are qualified & of experience in this Class</h1>
                        <p className="">Our online classroom is a vibrant virtual space where we come together to learn, share ideas, and explore new horizons. It's a dynamic platform where knowledge knows no bounds, and our dedicated community of learners thrives in the digital realm. Join us on this educational journey as we embrace the future of learning and expand our horizons together! </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default About;