export default function Features() {
    return (
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold">⚡ Fast</h3>
              <p>Get your site running quickly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📱 Responsive</h3>
              <p>Perfect on phones, tablets, and desktops.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📈 SEO Optimized</h3>
              <p>Rank higher on Google search results.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  