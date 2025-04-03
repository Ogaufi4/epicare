'use client';
import { useEffect, useRef } from "react";

export default function Hero() {
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
                const offset = window.scrollY * 0.3;
                imageRef.current.style.transform = `translateX(${offset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-indigo-200">
            <section className="pt-24 pb-12 mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-center md:px-8 bg-indigo-200 animate-fade-in-up">
                <div
                    ref={imageRef}
                    className="flex-1 text-center mb-8 lg:mb-0 lg:ml-3 lg:order-2 w-full max-w-lg mx-auto"
                >
                    <img 
                        src="https://images.pexels.com/photos/6798899/pexels-photo-6798899.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        className="w-full rounded-lg shadow-xl" 
                        alt="Medication Management" 
                    />
                </div>
                <div className="space-y-4 flex-1 text-center lg:text-left lg:order-1">
                    <h1
                        ref={headerRef}
                        className="text-black font-bold text-4xl xl:text-5xl opacity-0 transition-opacity duration-1000"
                    >
                        Managing Your 
                        <span className="text-black-100"> Epilepsy Medication</span>
                    </h1>
                    <p className="text-black max-w-xl leading-relaxed mx-auto lg:mx-0 falling-words">
                        <span className="text-indigo-500 font-bold text-xl">Epilepsy</span> is a neurological disorder characterized by recurrent seizures. These seizures are caused by sudden, excessive electrical discharges in the brain. Proper medication management is essential for controlling seizures and improving quality of life.
                    </p>
                    <p className="text-black max-w-xl leading-relaxed mx-auto lg:mx-0 falling-words">
                        Taking your epilepsy medication as prescribed is crucial for seizure control. Learn about medication adherence strategies, tools, and support to help you stay on track with your treatment plan.
                    </p>
                    <div className="pt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
                        <a href="#learn" className="px-7 py-3 w-full sm:w-auto bg-white text-gray-800 text-center rounded-md shadow-md hover:bg-gray-100 transition-colors falling-words">
                            Medication Guide
                        </a>
                        <a href="#tools" className="px-7 py-3 w-full sm:w-auto bg-gray-700 text-gray-200 text-center rounded-md hover:bg-gray-600 transition-colors falling-words">
                            Adherence Tools
                        </a>
                    </div>
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

