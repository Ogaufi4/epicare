'use client';
import { useEffect, useRef, useState } from "react";

export default () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const stories = [
        {
            avatar: "https://d1hjazypwz7api.cloudfront.net/f762f08a88ec41459a440ab6175ed9d0",
            name: "Martiana Dialan",
            story: "Epilepsy 101",
            url: "https://undivided.io/resources/epilepsy-101-2036"
        },
        {
            avatar: "https://d1hjazypwz7api.cloudfront.net/1c8d593f6ab44e86bcc0ac54e3bcffff",
            name: "Martiana Dialan",
            story: "Kids Resources on Disability Awareness and Acceptance",
            url: "https://undivided.io/resources/kids-resources-on-disability-awareness-and-acceptance-1230"
        },
        // ... other stories
    ];

    return (
        <section ref={sectionRef} className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3
                        className={`text-purple-800 text-4xl font-extrabold sm:text-5xl transition-opacity duration-1000 ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        Inspiring Stories of Strength and Hope and extra articles
                    </h3>
                    <p
                        className={`text-gray-500 mt-2 text-base transition-opacity duration-1000 ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        Explore additional articles and resources to learn more about epilepsy and how to support those affected by it.
                    </p>
                 
                    <button
                        className={`mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition ${
                            isVisible ? "fade-in" : "opacity-0"
                        }`}
                    >
                        Share Your Story
                    </button>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3  ">
                        {stories.map((item, idx) => (
                            <li
                                key={idx}
                                className={`${
                                    isVisible ? "fade-in" : "opacity-0"
                                }`}
                            >
                                <div className="w-full h-60 sm:h-52 md:h-56 hover:scale-110 " onClick={() => window.location.href = item.url}>
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full object-cover object-center shadow-md rounded-xl "
                                        alt={item.name}
                                    />
                                </div>
                                <div className="mt-4" >
                                    <p className="text-gray-600 mt-2">
                                        {item.story}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
