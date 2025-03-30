import React from 'react'
import { Activity, Brain, BriefcaseMedicalIcon, Eye , Home, ScanHeart, Stethoscope } from 'lucide-react'

export default () => {
    const features = [
        {
            icon:
            <Stethoscope
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "What is epilepsy?",
            desc: "Epilepsy is a neurological disorder characterized by recurrent seizures caused by abnormal electrical activity in the brain. It is diagnosed after two or more unprovoked seizures occurring at least 24 hours apart."
        },
        {
            icon:
            <Eye
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Types of focal seizures",
            desc: "Focal seizures can be without loss of consciousness, causing altered emotions or involuntary jerking, or with impaired awareness, involving a change or loss of consciousness and repetitive movements."
        },
        {
            icon:
            <Brain
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Types of generalized seizures",
            desc: "Generalized seizures include absence seizures, tonic seizures, atonic seizures, clonic seizures, myoclonic seizures, and tonic-clonic seizures, each with distinct symptoms and effects."
        },
        {
            icon:
            <BriefcaseMedicalIcon
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Medication adherence",
            desc: "Taking epilepsy medications as prescribed is essential for seizure control, reducing risks like SUDEP, and improving quality of life. Non-adherence can lead to breakthrough seizures and complications."
        },
        {
            icon:
            <ScanHeart
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Improving adherence",
            desc: "Simple strategies like setting reminders, using pill organizers, and educating patients and families about epilepsy can help improve medication adherence and treatment outcomes."
        },
        {
            icon:
            <Activity
            className="text-indigo-600"
            size={24}
            color="#8400ff"
            strokeWidth={1.5}
          />,
            title: "Impact of non-adherence",
            desc: "Non-adherence to antiepileptic drugs can result in poor seizure control, increased healthcare costs, and a negative impact on quality of life. Education and support are crucial for adherence."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Learn more about Epilepsy
                        </h3>
                        <p className="mt-3">
                            Epilepsy is a complex neurological disorder that affects millions of people worldwide. Understanding its types, symptoms, and the importance of medication adherence can significantly improve the quality of life for those living with epilepsy.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  ">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="bg-white space-y-3 p-4 border border-gray-300 rounded-lg shadow-lg">
                                    <div className="text-indigo-600 pb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}