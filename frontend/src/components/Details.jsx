'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const teamMembers = [
  {
    name: 'Prof. Dr. Siti Norul Huda Sheikh Abdullah',
    role: 'Ketua Projek ',
    image: '/team/member2.png'
  },
  {
    name: 'Muhammad Haikal bin Abdul Razak',
    role: 'Developer',
    image: '/team/member1.png'
  },
  {
    name: 'Team Member 3',
    role: 'Role / Position',
    image: '/team/avatar.png'
  },
  {
    name: 'Team Member 4',
    role: 'Role / Position',
    image: '/team/avatar.png'
  },
  {
    name: 'Team Member 5',
    role: 'Role / Position',
    image: '/team/avatar.png'
  },
  {
    name: 'Team Member 6',
    role: 'Role / Position',
    image: '/team/avatar.png'
  }
]

export default function Details() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState('right')
  const totalPages = teamMembers.length

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right')
      setCurrentPage(current => (current < totalPages - 1 ? current + 1 : 0))
    }, 3000)

    return () => clearInterval(timer)
  }, [totalPages])

  const handlePrevious = () => {
    setDirection('left')
    setCurrentPage(current => (current > 0 ? current - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setDirection('right')
    setCurrentPage(current => (current < totalPages - 1 ? current + 1 : 0))
  }

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="relative h-[400px]">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out transform ${
                  currentPage === index 
                    ? 'opacity-100 translate-x-0' 
                    : currentPage < index
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-80 mb-4 rounded-full overflow-hidden bg-transparent">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-lg text-gray-600 mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="bg-transparent p-2 rounded-full shadow-md hover:bg-transparent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 'right' : 'left')
                    setCurrentPage(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentPage === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
