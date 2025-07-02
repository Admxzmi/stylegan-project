'use client'
import { useState } from 'react'

const PricingCard = ({ title, price, description, features, popular, onClick }) => (
  <div className={`p-8 rounded-lg border ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
    {popular && (
      <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
        Most popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-500"> / month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={onClick}
      className={`w-full py-3 px-4 rounded-lg font-medium ${
        popular
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-gray-900 text-white hover:bg-gray-800'
      }`}
    >
      Choose Plan
    </button>
  </div>
)

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      title: 'Free',
      description: 'Lorem Ipsum is simply dummythe.',
      monthlyPrice: '0',
      yearlyPrice: '0',
      features: [
        '60-day chat history',
        '35 GB cloud storage',
        '24/7 Support',
        'Custom Branding Strategy',
      ],
    },
    {
      title: 'Unlimited',
      description: 'Lorem Ipsum is simply dummythe.',
      monthlyPrice: '35',
      yearlyPrice: '350',
      features: [
        '60-day chat history',
        '35 GB cloud storage',
        '24/7 Support',
        'Custom Branding Strategy',
      ],
      popular: true,
    },
    {
      title: 'Business',
      description: 'Lorem Ipsum is simply dummythe.',
      monthlyPrice: '59',
      yearlyPrice: '590',
      features: [
        '60-day chat history',
        '35 GB cloud storage',
        '24/7 Support',
        'Custom Branding Strategy',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-lg ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
              onClick={() => setIsYearly(!isYearly)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              features={plan.features}
              popular={plan.popular}
              onClick={() => console.log(`Selected ${plan.title} plan`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 