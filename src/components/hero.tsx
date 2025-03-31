'use client';
import { useEffect, useRef } from "react";

export default function Hero() {

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "About Epilepsy", path: "javascript:void(0)" },
        { title: "Contact", path: "javascript:void(0)" },
    ];

    const headerRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    headerRef.current?.classList.add("fade-in");
                } else {
                    headerRef.current?.classList.remove("fade-in");
                }
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const offset = window.scrollY * 0.3; // Adjust the multiplier for desired effect
                imageRef.current.style.transform = `translateX(${offset}px)`; // Move along the x-axis
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-indigo-200">
            <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                    <a href="javascript:void(0)">
                        <img src="/images/logo.png" className="h-10 w-40" />
                    </a>
                    <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end ">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-black-100" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                        <li>
                            <a href="javascript:void(0)" className="flex items-center text-gray-200">
                                Log In
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-indigo-200 animate-fade-in-up">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1
                        ref={headerRef}
                        className="text-black font-bold text-4xl xl:text-5xl opacity-0 transition-opacity duration-1000"
                    >
                        Understanding 
                        <span className="text-black-100"> Epilepsy</span>
                    </h1>
                    <p className="text-black max-w-xl leading-relaxed sm:mx-auto lg:ml-0 falling-words">
                        Epilepsy is a neurological disorder that affects millions of people worldwide. Discover ways to manage, support, and raise awareness for those living with this condition.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto hover:bg-gray-100 transition-colors falling-words">
                            Learn more
                        </a>
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto hover:bg-gray-600 transition-colors falling-words">
                            Find Support
                        </a>
                    </div>
                </div>
                <div
                    ref={imageRef}
                    className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 rounded-lg"
                >
                    <img src="https://media.istockphoto.com/id/1267063665/photo/scientist-doing-virus-analysis-using-desktop-pc.jpg?s=612x612&w=0&k=20&c=WRsS9vRrj0R5bAGCzZyEX0XeUzYlHOPAUHZPyM0EJRQ=" className="w-full mx-auto sm:w-10/12 lg:w-full rounded-lg" />
                </div>
            </section>
            <style jsx>{`
                .falling-words {
                    animation: fall-in 1s ease-out;
                }

                @keyframes fall-in {
                    0% {
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .fade-in {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}
