'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Bell, Calendar, Clock, FileText, Pill, Plus, Settings, Trash2 } from 'lucide-react';

export default function AdherenceTools() {
    const [medications, setMedications] = useState([
        { id: 1, name: 'Levetiracetam', time: '08:00', dose: '500mg' },
        { id: 2, name: 'Lamotrigine', time: '20:00', dose: '100mg' }
    ]);

    const [newMedication, setNewMedication] = useState({
        name: '',
        time: '',
        dose: ''
    });

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

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    const handleAddMedication = () => {
        if (newMedication.name && newMedication.time && newMedication.dose) {
            setMedications([...medications, { ...newMedication, id: medications.length + 1 }]);
            setNewMedication({ name: '', time: '', dose: '' });
        }
    };

    const handleDeleteMedication = (id: number) => {
        setMedications(medications.filter(med => med.id !== id));
    };

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div 
                    ref={headerRef}
                    className={`max-w-2xl mx-auto text-center transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                        Medication Management Tools
                    </h1>
                    <p className="mt-3 text-gray-600">
                        Use these tools to help you stay on track with your medication schedule and maintain better control of your epilepsy.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Medication Tracker */}
                    <div className={`bg-white p-6 rounded-xl shadow-lg transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
                                <Pill className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Medication Tracker</h3>
                        </div>
                        <div className="mt-6 space-y-4">
                            {medications.map((med) => (
                                <div key={med.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-gray-800">{med.name}</h4>
                                        <p className="text-sm text-gray-600">{med.dose}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-gray-600">{med.time}</span>
                                        <button 
                                            onClick={() => handleDeleteMedication(med.id)}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Medication Name"
                                    value={newMedication.name}
                                    onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <div className="flex gap-3">
                                    <input
                                        type="time"
                                        value={newMedication.time}
                                        onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
                                        className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Dose"
                                        value={newMedication.dose}
                                        onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })}
                                        className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>
                                <button
                                    onClick={handleAddMedication}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                                >
                                    <Plus className="w-5 h-5" />
                                    Add Medication
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reminder Settings */}
                    <div className={`bg-white p-6 rounded-xl shadow-lg transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
                                <Bell className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Reminder Settings</h3>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800">Notification Preferences</h4>
                                <div className="mt-2 space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded text-indigo-600" />
                                        <span className="text-sm text-gray-600">Push Notifications</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded text-indigo-600" />
                                        <span className="text-sm text-gray-600">Email Reminders</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded text-indigo-600" />
                                        <span className="text-sm text-gray-600">SMS Alerts</span>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                                <Settings className="w-5 h-5" />
                                Save Settings
                            </button>
                        </div>
                    </div>

                    {/* Emergency Plan */}
                    <div className={`bg-white p-6 rounded-xl shadow-lg transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
                                <FileText className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Emergency Plan</h3>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800">Emergency Contacts</h4>
                                <p className="mt-2 text-sm text-gray-600">
                                    Add your emergency contacts and important medical information here.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800">Seizure Action Plan</h4>
                                <p className="mt-2 text-sm text-gray-600">
                                    Document your seizure triggers, warning signs, and what others should do during a seizure.
                                </p>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                                <FileText className="w-5 h-5" />
                                Download Emergency Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 