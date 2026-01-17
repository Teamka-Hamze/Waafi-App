import React from 'react'

const Cards = () => {
  return (
    <div className="bg-white py-16 px-4 font-sans">

      {/* ================= CARDS SECTION ================= */}
      <div className="flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Mission Card */}
          <div className="bg-cyan-50 p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <span className="text-blue-500 text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission at Waafi is to provide everybody a secure and reliable cashless
              mobile payment platform with outstanding user experience that acts like a
              companion that simplifies your life.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-red-50 p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <span className="text-red-400 text-3xl">🔭</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the consumer' first choice as a service that can withstand their
              daily online payment needs – a true companion. To make the Waafi brand a
              household name, synonymous with reliability, efficiency and security.
            </p>
          </div>

          {/* Goals Card */}
          <div className="bg-orange-50 p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
              <span className="text-orange-400 text-3xl">🚩</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Goals</h3>
            <p className="text-gray-600 leading-relaxed">
              From the very start, we shaped our organization around the same values and
              culture Waafi was founded on. We believe, creating an environment for
              openness and cooperation for our employees leads to more innovation and
              growth.
            </p>
          </div>

        </div>
      </div>

      {/* ================= DOWNLOAD SECTION ================= */}
      <div className="flex justify-center mt-10">
        <div className="text-center max-w-3xl w-full">

          <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">
            WAAFI <br />
            <span className="text-emerald-500">DOWNLOAD</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            WAAFI is your new life-style combining mobile money, communication,
            entertainment and productivity in a unified app.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="flex items-center border-2 border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50 transition-all">
              <span className="text-3xl mr-3">🍎</span>
              <div className="text-left">
                <p className="text-[10px] uppercase">Download on the</p>
                <p className="text-xl font-semibold leading-tight">App Store</p>
              </div>
            </button>

            <button className="flex items-center border-2 border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-50 transition-all">
              <span className="text-3xl mr-3">🤖</span>
              <div className="text-left">
                <p className="text-[10px] uppercase">GET IT ON</p>
                <p className="text-xl font-semibold leading-tight">Google Play</p>
              </div>
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Cards
