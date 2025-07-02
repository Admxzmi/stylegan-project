'use client'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer">
              <div className="text-black text-2xl font-bold flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <Image
                    src="/logo.png"
                    alt="DeepFake Logo"
                    width={30}
                    height={30}
                    quality={100}
                    priority
                    className="inline-block object-contain"
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                  <span className="text-black text-1xl font-bold">DeepFake</span>
                </div>
                <Image
                  src="/logo2.png"
                  alt="KPT Logo"
                  width={140}
                  height={140}
                  quality={100}
                  priority
                  className="inline-block object-contain"
                  style={{ 
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                <Image
                  src="/logo_ukm.png"
                  alt="KPT Logo"
                  width={140}
                  height={140}
                  quality={100}
                  priority
                  className="inline-block object-contain"
                  style={{ 
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-600 hover:text-gray-900">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-600 hover:text-gray-900">
              About
            </ScrollLink>
            <ScrollLink to="pricing" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-600 hover:text-gray-900">
              Pricing
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-600 hover:text-gray-900">
              Contact
            </ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-600 hover:text-gray-900">
              Features
            </ScrollLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border border-gray-200 rounded-lg mt-2 py-2">
            <div className="px-2 space-y-1">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                offset={-100}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={500}
                offset={-100}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ScrollLink>
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                offset={-100}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
