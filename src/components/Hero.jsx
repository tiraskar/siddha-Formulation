/* SiddhaHero.jsx - Hero + Bottom Section */

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Text Section */}
          <div>
            <img src="../src/assets/img/siddha.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-600 tracking-widest font-semibold mb-2">
              ADVANCE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              NUTRACEUTICAL
              <br />
              PRODUCT
            </h1>
            <p className="text-gray-600 mt-4 mb-6 md:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition flex items-center gap-2">
              Shop Now
              <span className="text-xl">→</span>
            </button>
          </div>

     {/* Right Image Section */}
<div className="relative flex items-center justify-center">
  <div className="relative">
    <img
      src="../src/assets/img/Herbal-Medicine.jpg"
      alt="Herbal Product"
      className="w-[400px] md:w-[600px] lg:w-[650px] h-auto drop-shadow-lg relative z-10  rounded-2xl"
    />
    {/* Optional decorative circle behind */}
  </div>
</div>
        </div>
      </section>

      {/* Bottom Ayurvedic Info Section */}
      <section className="relative w-full mt-0">
        {/* Background Image */}
        <div
          className="w-full h-[360px] md:h-[420px] bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{ backgroundImage: "url('/src/assets/img/Herbal-Medicine.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
              Buy Ayurvedic Medicine & Products Online from India's
              <br /> Largest Ayurvedic Shopping Store
            </h2>

            <p className="text-[13px] md:text-sm leading-relaxed">
              AyurKart, the online ayurvedic store sells all kinds of ayurvedic medicine and ayurvedic
              products online from India's top most ayurvedic brands like Kottakkal Arya VaidyaSala,
              Vaidyaratnam, AVP, Kerala Ayurveda, Himalaya, Dabur, Zandu Ayurveda & Alarsin etc.,
              our aims to bring the world of authentic ayurvedic herbs and ayurvedic medicines to your
              doorstep within the shortest delivery time possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
