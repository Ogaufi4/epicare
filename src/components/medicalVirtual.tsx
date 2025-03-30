import { Activity, Brain, BriefcaseMedicalIcon, Eye, ScanHeart, Stethoscope } from 'lucide-react'
import React from 'react'

export default function medicalVirtual() {
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

    return (
        <div className="bg-indigo-200">
            <div className='flex-1 items-center flex justify-center pt-10'>
                 <h1 className='text-4xl xl:text-5xl font-bold text-center'>First Aid For Seizures</h1>
            </div>
          
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-indigo-200">
                <div className="flex-1 mt-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">What to do</h2>
                    <ol className="space-y-6">
                        {instructions.map((step, idx) => (
                            <li key={idx} className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <img src={step.image} alt={`Step ${step.number}`} className="w-50 h-50 rounded-lg"  />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Step {step.number}</h3>
                                    <p className="text-gray-600">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
    )
}

