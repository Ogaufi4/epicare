'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const navigation = [
        { title: "Home", path: "#home", isHash: true },
        { title: "Medication Guide", path: "#learn", isHash: true },
        { title: "Adherence Tools", path: "#tools", isHash: true },
        { title: "Support", path: "#support", isHash: true },
        { title: "Adherence Rates", path: "/adherence", isHash: false },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header 
            ref={headerRef}
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-indigo-200/80 backdrop-blur-md shadow-lg' 
                    : 'bg-indigo-200'
            }`}
        >
            <nav className="items-center pt-5 pb-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                <div className="flex items-center justify-between">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center">
                        <img src="/images/logo.png" className="h-10 w-40" alt="EpiCare Logo" />
                    </a>
                    <button 
                        className="sm:hidden p-2 rounded-md hover:bg-indigo-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-800" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-800" />
                        )}
                    </button>
                </div>
                <div className={`nav-links flex-1 pb-8 mt-8 sm:pb-0 sm:mt-0 ${
                    isMenuOpen ? 'block' : 'hidden'
                } sm:block`}>
                    <ul className="justify-end items-center space-y-6 sm:flex sm:space-x-6 sm:space-y-0">
                        {navigation.map((item, idx) => (
                            <li className="text-gray-700 hover:text-indigo-600" key={idx}>
                                {item.isHash ? (
                                    <a 
                                        href={item.path}
                                        onClick={(e) => scrollToSection(e, item.path.substring(1))}
                                        className="block hover:text-indigo-600 transition-colors"
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link 
                                        href={item.path}
                                        className="block hover:text-indigo-600 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="w-full sm:w-auto">
                            <a href="javascript:void(0)" className="flex items-center justify-center text-gray-200 bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                                Log In
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
} 