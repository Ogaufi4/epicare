'use client';
import React from 'react';

const adherenceData = [
    { medication: 'CHAMANET ET AL', adherent: 63, nonAdherent: 37 },
    { medication: 'FERRARI ET AL', adherent: 66, nonAdherent: 34 },
    { medication: 'GUO ET AL', adherent: 60, nonAdherent: 40 },
    { medication: 'HOVINGA ET AL', adherent: 71, nonAdherent: 29 },
    { medication: 'JONES ET AL', adherent: 41, nonAdherent: 59 },
    { medication: 'SHALLCROSS ET AL', adherent: 64, nonAdherent: 36 },
    { medication: 'SMITHSON ET AL', adherent: 70, nonAdherent: 30 },
];

export default function MedicationAdherence() {
    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        Medication Adherence Rates
                    </h1>
                    <p className="text-gray-600">
                        Understanding adherence patterns across different studies helps improve medication management strategies.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="space-y-8">
                        {adherenceData.map((item) => (
                            <div key={item.medication} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">
                                        {item.medication}
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">
                                        {item.adherent}% Adherent
                                    </span>
                                </div>
                                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-indigo-600 transition-all duration-300"
                                        style={{ width: `${item.adherent}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>Adherent ({item.adherent}%)</span>
                                    <span>Non-adherent ({item.nonAdherent}%)</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 bg-indigo-50 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Key Insights
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span>Highest adherence rate: {Math.max(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.max(...adherenceData.map(d => d.adherent)))?.medication})</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span>Lowest adherence rate: {Math.min(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.min(...adherenceData.map(d => d.adherent)))?.medication})</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span>Average adherence rate: {Math.round(adherenceData.reduce((acc, curr) => acc + curr.adherent, 0) / adherenceData.length)}%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Data sourced from multiple clinical studies. Adherence rates may vary based on factors such as medication type, dosing schedule, and patient demographics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 