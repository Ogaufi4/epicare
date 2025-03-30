'use client';
export default () => {

    const faqsList = [
        {
            q: "What is epilepsy?",
            a: "Epilepsy is a group of non-communicable neurological disorders characterized by recurrent epileptic seizures. An epileptic seizure is the clinical manifestation of an abnormal, excessive, and synchronized electrical discharge in the neurons. The occurrence of two or more unprovoked seizures defines epilepsy.",
            href: "https://www.epilepsy.com/what-is-epilepsy",
        },
        {
            q: "What are focal seizures?",
            a: "Focal seizures are divided into two categories: <br/><b>Focal seizures without loss of consciousness:</b> These seizures don't cause a loss of awareness and may alter emotions or cause involuntary jerking of a body part. <br/><b>Focal seizures with impaired awareness:</b> These involve a change or loss of consciousness and may include repetitive movements like hand rubbing or chewing.",
            href: "https://my.clevelandclinic.org/health/diseases/22893-focal-seizure",
        },
        {
            q: "What are generalized seizures?",
            a: "Generalized seizures involve all areas of the brain and include: <br/><b>Absence seizures:</b> Brief loss of awareness, often with subtle movements. <br/><b>Tonic seizures:</b> Stiff muscles, often causing falls. <br/><b>Atonic seizures:</b> Sudden loss of muscle control. <br/><b>Clonic seizures:</b> Rhythmic jerking movements. <br/><b>Myoclonic seizures:</b> Sudden brief jerks or twitches. <br/><b>Tonic-clonic seizures:</b> Sudden loss of consciousness with body stiffening and shaking.",
            href: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/epilepsy/generalized-seizures",
        },
        {
            q: "Why is medication adherence important for epilepsy?",
            a: "Adhering to epilepsy medication regimens is crucial for effective seizure control, reducing the risk of seizures and their associated risks, and improving overall quality of life. It helps prevent complications like SUDEP, reduces healthcare costs, and ensures better seizure management.",
            href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6507244/",
        },
        {
            q: "How can medication adherence be improved?",
            a: "Strategies include setting reminders, using pill organizers, and maintaining open communication with healthcare providers. Education about epilepsy and the importance of adherence is also key to successful treatment.",
            href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6507244/",
        }
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        How can we help?
                    </h3>
                    <p className="text-gray-600">
                        Everything you need to know about the Epilipsy. Can’t find the answer you’re looking for? feel free to {" "}
                        <a
                            className='text-indigo-600 font-semibold whitespace-nowrap'
                            href='#'>
                            contact us
                        </a>.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="mx-auto sm:max-w-xs">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search for answers"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </form>
                </div>
                <div className='mt-12'>
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-700">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='text-gray-600 leading-relaxed'>
                                </p>
                                <a href={item.href} className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};