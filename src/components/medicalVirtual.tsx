import { Activity, Brain, BriefcaseMedicalIcon, Eye, ScanHeart, Stethoscope } from 'lucide-react'
import React from 'react'

export default function medicalVirtual() {
    const features = [
        {
            icon:
            <Stethoscope
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Keep calm",
            desc: "Stay with the person and remain calm.Time the seizure."
        },
        {
            icon:
            <Eye
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Ensure Safety",
            desc: "Move dangerous object away and cushion their heads."
        },
        {
            icon:
            <Brain
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Dont restrain",
            desc: "Never try to restrain the person or put anything in their mouth."
        },
       
        
    
        
    ]

    return (
        <div className="bg-indigo-200">
            <div className='flex-1 items-center flex justify-center pt-10'>
                 <h1 className='text-4xl xl:text-5xl font-bold text-center'>First aid for seizures</h1>
            </div>
          
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-indigo-200">
                
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <ul className=" ">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="pb-3 
                                ">
                                    <div className=" sm:text-center text-black text-lg  flex flex-row gap-2">
                                        {item.icon}
                                          <h4 className="text-md text-gray-800 font-semibold ">
                                        {item.title}
                                    </h4>
                                    </div>
                                    <p className='lg:pl-7  pl-4 text-gray-600 leading-relaxed'>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex-1 text-center  lg:mt-0 lg:ml-3 ">
                    <img src="/images/firstaid.png" className="rounded-lg w-full mx-auto sm:w-10/12 pt-10 lg:w-full md:w-xl "  />
                </div>
            </section>
        </div>
    )
}

