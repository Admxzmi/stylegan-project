'use client'

const Contact = () => {
  return (
    <section className="py-16 bg-black text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="max-w-xl mx-auto space-y-4 px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-100 hover:bg-gray-200 px-8 py-3 rounded font-semibold transition-colors duration-300 border border-gray-200"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
