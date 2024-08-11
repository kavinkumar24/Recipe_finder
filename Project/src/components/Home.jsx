import Navbar from "./Navbar";
import saladBg from "../assets/bg_img.jpg"; // Background image
import salad from "../assets/Home_page_img1.jpg"; // Salad image

function Home() {
    return (
        <div className="bg-white min-h-screen relative">
            {/* Background Oval - Behind the Navbar */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 hidden md:block">
        <div
            className="absolute right-[-60%] top-0 w-[150%] h-full"
            style={{
                backgroundImage: `url(${saladBg})`,
                clipPath: "ellipse(70% 120% at 100% 50%)", // Creates the larger half-oval effect
                backgroundSize: "contain", // Ensures the image fits within the div without zooming too much
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                backgroundPosition: "center", // Centers the image within the div
            }}
        ></div>
    </div>

            {/* Navbar - Overlayed on top of the background */}
            <div className="relative z-10">
                <Navbar />
            </div>

            <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between ">
                {/* Left Side - Text and Order Details */}
                <div className="md:w-1/2 text-center md:text-left z-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Order your <br /> favourite Foods
                    </h1>
                    <p className="mt-4 text-gray-500 text-sm md:text-base">
                        Fresh and tasty seafood curry sit amet, consectetur
                        Curabitur accumsan auctor pulvinar sit amet.
                    </p>
                    <div className="mt-6 text-xl font-semibold">
                        <span>Total order:</span>
                        <span className="text-yellow-600 ml-2">$24.30</span>
                    </div>
                    <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center space-x-2">
                            <button className="text-gray-600">-</button>
                            <span>2</span>
                            <button className="text-gray-600">+</button>
                        </div>
                        <button className="bg-black text-white px-6 py-2 rounded-lg">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Right Side - Salad Image */}
                <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end z-10 shadow-xl md:visible">
                    <img
                        src={salad}
                        alt="Salad"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-50 h-50 md:w-96 md:h-96 object-cover rounded-full z-10 shadow-xl" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
