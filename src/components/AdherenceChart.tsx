'use client';
import React, { useEffect, useRef, useState } from 'react';

const adherenceData = [
    { study: 'CHAMANET ET AL', adherent: 63, nonAdherent: 37 },
    { study: 'FERRARI ET AL', adherent: 66, nonAdherent: 34 },
    { study: 'GUO ET AL', adherent: 60, nonAdherent: 40 },
    { study: 'HOVINGA ET AL', adherent: 71, nonAdherent: 29 },
    { study: 'JONES ET AL', adherent: 41, nonAdherent: 59 },
    { study: 'SHALLCROSS ET AL', adherent: 64, nonAdherent: 36 },
    { study: 'SMITHSON ET AL', adherent: 70, nonAdherent: 30 }
];

export default function AdherenceChart() {
    const [isVisible, setIsVisible] = useState(false);
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, []);

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        Medication Adherence Rates
                    </h2>
                    <p className="text-gray-600">
                        Comparative analysis of adherence rates across different studies
                    </p>
                </div>

                <div 
                    ref={chartRef}
                    className="space-y-8"
                >
                    {adherenceData.map((item, idx) => (
                        <div 
                            key={idx}
                            className={`transform transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                            }`}
                            style={{ transitionDelay: `${idx * 200}ms` }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                    {item.study}
                                </span>
                                <span className="text-sm font-medium text-gray-700">
                                    {item.adherent}% Adherent
                                </span>
                            </div>
                            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-600 transition-all duration-1000 ease-out"
                                    style={{ 
                                        width: isVisible ? `${item.adherent}%` : '0%',
                                        transitionDelay: `${(idx * 200) + 500}ms`
                                    }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Adherent ({item.adherent}%)</span>
                                <span>Non-adherent ({item.nonAdherent}%)</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-indigo-50 rounded-lg transform transition-all duration-1000 delay-1000">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Key Findings
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                            <span>Highest adherence rate: {Math.max(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.max(...adherenceData.map(d => d.adherent)))?.study})</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                            <span>Lowest adherence rate: {Math.min(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.min(...adherenceData.map(d => d.adherent)))?.study})</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                            <span>Average adherence rate: {Math.round(adherenceData.reduce((acc, curr) => acc + curr.adherent, 0) / adherenceData.length)}%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
} 