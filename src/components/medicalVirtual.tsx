'use client';
import { Activity, Brain, BriefcaseMedicalIcon, Eye, ScanHeart, Stethoscope } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';

export default function Medical() {
    const instructions = [
        {
            number: 1,
            image: "/images/step1.png",
            text: "Clear away any potentially dangerous objects like hot drinks or sharp objects. Protect the casualty's privacy and note the time the seizure started."
        },
        {
            number: 2,
            image: "/images/step2.png",
            text: "Do not restrain the casualty or move them unless they are in immediate danger. Do not put anything in their mouth."
        },
        {
            number: 3,
            image: "/images/step3.png",
            text: "Protect their head with soft padding, such as a rolled-up towel. Loosen any clothing around their neck."
        },
        {
            number: 4,
            image: "/images/step4.png",
            text: "When movements have stopped, open their airway and check their breathing. If they are breathing, put them in the recovery position."
        },
        {
            number: 5,
            image: "/images/step5.png",
            text: "Monitor their level of response and note how long the seizure lasted. If they become unresponsive, call 999 or 112 and give CPR if needed."
        }
    ];

    const [activeStep, setActiveStep] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveStep(1); // Trigger the effect when the container is in view
                    const images = containerRef.current?.querySelectorAll('.slide-in-image');
                    images?.forEach((img) => {
                        img.classList.remove('slide-in-active');
                        void (img as HTMLImageElement).offsetWidth; // Trigger reflow to restart animation
                        img.classList.add('slide-in-active');
                    });
                } else {
                    setActiveStep(null); // Reset when out of view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the container is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

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

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-indigo-200">
            <div
                ref={headerRef}
                className={`flex-1 items-center flex justify-center pt-10 transition-opacity duration-1000 ${
                    isHeaderVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                    First Aid For Seizures
                </h1>
            </div>
            <section
                ref={containerRef}
                className={`mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-indigo-200 animate-fade-in-up transform transition-transform duration-300 ${
                    activeStep ? 'scale-105' : ''
                }`}
            >
                <div className="flex-1 mt-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">What to do</h2>
                    <ol className="space-y-6">
                        {instructions.map((step, idx) => (
                            <li
                                key={idx}
                                className="flex flex-col lg:flex-row items-start lg:items-center gap-4 transform transition-transform duration-300 hover:scale-110 hover:bg-indigo-100 p-4 rounded-lg"
                            >
                                <img
                                    src={step.image}
                                    alt={`Step ${step.number}`}
                                    className={`w-50 h-50 rounded-lg slide-in-image`}
                                    style={{ animationDelay: `${idx * 0.2}s` }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Step {step.number}</h3>
                                    <p className="text-gray-600">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <style jsx>{`
                .slide-in-image {
                    animation: slide-in 0.8s ease-out forwards;
                    opacity: 0;
                    transform: translateX(-100px);
                }

                .slide-in-active {
                    animation: slide-in 0.8s ease-out forwards;
                }

                @keyframes slide-in {
                    0% {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}

