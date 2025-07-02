import Image from 'next/image'
export default function Hero() {
    return (
        <section className="min-h-[100vh] flex items-center justify-center text-gray-900">
            <div className="text-center px-4 mt-50">
            <Image
                    src="/logo.png"
                    alt="DeepFake Logo"
                    width={180}
                    height={180}
                    quality={100}
                    priority
                    className="inline-block object-contain -mt-70"
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
              <h1 className="text-5xl font-bold mb-4">DeepFake Detection</h1>
              <p className="text-lg mb-6">"Trust What You See. Verify with Us."</p>
              <a
                href="#contact"
                className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition-colors duration-300 border border-gray-200"
              >
                Get Started
              </a>
            </div>
        </section>
    )
}
