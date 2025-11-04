import Image from "next/image";

export default function MacBookIntro() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight">
            MacBook
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Supercharged by M3 chip
          </p>
          
          {/* MacBook Image Placeholder */}
          <div className="relative mx-auto mb-12 max-w-4xl">
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-gray-400 text-lg">MacBook Pro</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Learn more
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Buy
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">
            Built for performance
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">M3 Chip</h3>
              <p className="text-gray-400">
                Up to 22 hours of battery life with the most advanced chip ever built for a personal computer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Liquid Retina Display</h3>
              <p className="text-gray-400">
                Stunning 13.6-inch display with 500 nits of brightness and P3 wide color gamut.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Advanced Cooling</h3>
              <p className="text-gray-400">
                Fanless design that runs virtually silent while delivering incredible performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">
            Choose your MacBook
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-gray-400">MacBook Air</div>
              </div>
              <h3 className="text-2xl font-medium mb-4">MacBook Air</h3>
              <p className="text-gray-400 mb-6">
                Incredibly thin and light with up to 18 hours of battery life.
              </p>
              <div className="text-xl font-medium mb-6">From $1,099</div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-gray-400">MacBook Pro</div>
              </div>
              <h3 className="text-2xl font-medium mb-4">MacBook Pro</h3>
              <p className="text-gray-400 mb-6">
                The most powerful MacBook Pro ever with M3 Pro and M3 Max chips.
              </p>
              <div className="text-xl font-medium mb-6">From $1,599</div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Apple Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

