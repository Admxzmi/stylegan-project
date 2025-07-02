import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis exercitationem illum, sit earum, suscipit temporibus dolorem voluptate architecto. Ipsum, impedit."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis exercitationem illum, sit earum, suscipit temporibus dolorem voluptate architecto. Ipsum, impedit."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis exercitationem illum, sit earum, suscipit temporibus dolorem voluptate architecto. Ipsum, impedit."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>

        <div className="grid gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 