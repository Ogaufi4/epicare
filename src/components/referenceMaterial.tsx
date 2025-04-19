'use client';
import React, { useRef } from 'react';

function ReferenceMaterial() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = React.useState(true); // Define the variable

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
                            Reference Material
                        </h3>
                        <p className="mt-3">
                            Explore a variety of resources and strategies to help you better understand and manage epilepsy. Stay informed and empowered with the latest information tailored to your needs.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[111px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.3) 4.54%, rgba(232, 121, 249, 0.31) 34.2%, rgba(192, 132, 252, 0.16) 77.55%)" }}></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        World Health Organization. (2022). <i>Epilepsy fact sheet</i>. Retrieved from https://www.who.int/news-room/fact-sheets/detail/epilepsy
                    </span>
                </div>
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        Fisher, R. S., Acevedo, C., Arzimanoglou, A., et al. (2014). <i>ILAE official report: A practical clinical definition of epilepsy</i>. Epilepsia, 55(4), 475-482. https://doi.org/10.1111/epi.12550
                    </span>
                </div>
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        National Institute of Neurological Disorders and Stroke. (2021). <i>Epilepsy information page</i>. Retrieved from https://www.ninds.nih.gov/Disorders/All-Disorders/Epilepsy-Information-Page
                    </span>
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        Epilepsy Foundation. (2023). <i>Managing epilepsy</i>. Retrieved from https://www.epilepsy.com/living-epilepsy/managing-your-epilepsy
                    </span>
                </div>
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        Beghi, E. (2020). <i>The epidemiology of epilepsy</i>. Neuroepidemiology, 54(2), 185-191. https://doi.org/10.1159/000503831
                    </span>
                </div>
                <div className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">
                        Centers for Disease Control and Prevention. (2022). <i>Epilepsy data and statistics</i>. Retrieved from https://www.cdc.gov/epilepsy/data/index.html
                    </span>
                </div>
            </div>
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
       
    );
}

export default ReferenceMaterial;