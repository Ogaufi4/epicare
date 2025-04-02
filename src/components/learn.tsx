'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Activity, Brain, BriefcaseMedicalIcon, Eye , Home, ScanHeart, Stethoscope } from 'lucide-react'

export default function Learn() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                setIsHeaderVisible(false);
                setTimeout(() => {
                    if (headerRef.current) {
                        observer.observe(headerRef.current);
                    }
                }, 100);
            }
        });

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    const features = [
        {
            icon:
            <Stethoscope
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Why Medication Adherence Matters",
            desc: "Consistent medication adherence is crucial for controlling seizures and preventing complications. Missing doses can lead to breakthrough seizures and increase the risk of status epilepticus."
        },
        {
            icon:
            <Eye
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Setting Up Reminders",
            desc: "Use phone alarms, medication apps, or pill organizers to create a consistent routine. Setting reminders at specific times helps maintain regular medication schedules."
        },
        {
            icon:
            <Brain
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Understanding Your Medication",
            desc: "Learn about your specific medications, their side effects, and how they work. This knowledge helps you understand why adherence is important and what to expect."
        },
        {
            icon:
            <BriefcaseMedicalIcon
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Creating a Medication Routine",
            desc: "Link medication times to daily activities like meals or bedtime. This helps establish a consistent routine and makes it easier to remember your doses."
        },
        {
            icon:
            <ScanHeart
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Managing Side Effects",
            desc: "Learn how to recognize and manage medication side effects. Always report any concerns to your healthcare provider rather than stopping medication on your own."
        },
        {
            icon:
            <Activity
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Travel and Emergency Planning",
            desc: "Keep extra medication with you, maintain a list of your prescriptions, and have an emergency plan in place when traveling or during unexpected situations."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div
                    ref={headerRef}
                    className={`relative max-w-2xl mx-auto sm:text-center transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Medication Adherence Strategies
                        </h3>
                        <p className="mt-3">
                            Taking your epilepsy medication as prescribed is essential for seizure control and overall health. Discover practical strategies and tools to help you maintain consistent medication adherence and improve your quality of life.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[111px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.3) 4.54%, rgba(232, 121, 249, 0.31) 34.2%, rgba(192, 132, 252, 0.16) 77.55%)" }}></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="relative bg-white space-y-3 p-4 border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <div 
                                        className={`absolute inset-0 blur-[80px] opacity-30 thrown-image`}
                                        style={{
                                            backgroundImage: `url('https://source.unsplash.com/400x300/?medical,healthcare,${idx}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            zIndex: 0,
                                            animationDelay: `${idx * 0.2}s`,
                                        }}
                                    ></div>
                                    <div className="relative z-10 text-indigo-600 pb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="relative z-10 text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="relative z-10">
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .thrown-image {
                    animation: throw-in 0.8s ease-out forwards;
                    opacity: 0;
                    transform: translateX(-200px) rotate(-20deg);
                }

                @keyframes throw-in {
                    0% {
                        opacity: 0;
                        transform: translateX(-200px) rotate(-20deg);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0) rotate(0);
                    }
                }
            `}</style>
        </section>
    )
}