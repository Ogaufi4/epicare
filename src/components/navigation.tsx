'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const navigation = [
        { title: "Home", path: "#home" },
        { title: "Medication Guide", path: "#learn" },
        { title: "Adherence Tools", path: "#tools" },
        { title: "Support", path: "#support" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
                if (titleRef.current) {
                    titleRef.current.classList.add('fade-in');
                }
            } else {
                setIsScrolled(false);
                if (titleRef.current) {
                    titleRef.current.classList.remove('fade-in');
                }
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
            setIsMenuOpen(false); // Close menu after clicking a link
        }
    };

    return (
        <header className={`sticky top-0 z-50 bg-indigo-200/80 backdrop-blur-md transition-all duration-300 ${
            isScrolled ? 'shadow-lg' : ''
        }`}>
            <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
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
                <div className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } sm:block sm:flex-1`}>
                    <ul className="py-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 sm:space-x-6 sm:justify-end">
                        {navigation.map((item, idx) => (
                            <li className="text-black-100 w-full sm:w-auto" key={idx}>
                                <a 
                                    href={item.path} 
                                    onClick={(e) => scrollToSection(e, item.path.substring(1))}
                                    className="block hover:text-indigo-600 transition-colors px-3 py-2 rounded-md hover:bg-indigo-100"
                                >
                                    {item.title}
                                </a>
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
            <style jsx>{`
                .fade-in {
                    opacity: 1 !important;
                }
            `}</style>
        </header>
    );
} 