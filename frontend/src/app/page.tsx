'use client'

import Header from '@/components/Header'
import Features from '@/components/Features'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import { Element } from 'react-scroll'
import { AuroraBackground } from '@/components/aurora-background'
import Hero from '@/components/Hero'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Deepfake from '@/components/Deepfake'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex flex-col">
        <Header />  
        <main className="flex-1">
          {/* Hero Section */}
          <Element name="hero">
            <Hero />
          </Element>

          {/* Deepfake Section */}
          <Element name="deepfake">
            <section className="py-16 backdrop-blur-sm bg-white/10">
              <Deepfake />
            </section>
          </Element>

          {/* About Section */}
          <Element name="about">
            <section className="py-16 text-center backdrop-blur-sm bg-white/10">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  About Us
                </h2>
                <p className="text-xl text-gray-800 font-medium">
                We're building an advanced multi-stage AI model to detect deepfakes with speed, 
                precision, and reliability. Our system combines EfficientNet-B7, BiLSTM, 
                and attention mechanisms with cutting-edge optimization techniques like the Arithmetic Optimization 
                Algorithm (AOA) to deliver real-time, accurate results.Our mission is to deliver a highly scalable and accurate solution that 
                strengthens media authenticity and combats synthetic content threats globally.
                </p>
              </div>
            </section>
          </Element>

          {/* Team Section */}
          <Element name="team">
            <section className="backdrop-blur-sm bg-white/10">
              <Details />
            </section>
          </Element>

          {/* Pricing Section */}
          <Element name="pricing">
            <section className="py-16 backdrop-blur-sm bg-white/10">
              <Pricing />
            </section>
          </Element>

          {/* FAQ Section */}
          <Element name="faq">
            <section className="py-16 backdrop-blur-sm bg-white/10">
              <FAQ />
            </section>
          </Element>

          {/* Contact Section */}
          <Element name="contact">
            <Contact />
          </Element>

          {/* Features Section */}
          <Element name="features">
            <section className="backdrop-blur-sm bg-black">
              <Features />
            </section>
          </Element>

          <Element name="chart">
            <section className="py-16 backdrop-blur-sm bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ChartAreaInteractive />
              </div>
            </section>
          </Element>

          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </AuroraBackground>
  )
}
