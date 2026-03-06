const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-100 py-24 px-6">

      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-14 transition-all duration-500">

        {/* Accent Line */}
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8 mx-auto animate-pulse"></div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            About Kono Bank
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Kono Bank is a next-generation digital banking platform designed 
            to deliver secure, scalable, and intelligent financial services. 
            We combine modern web technologies with enterprise-grade security 
            standards to redefine the digital banking experience.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">

          {/* Card 1 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out">
            <div className="text-indigo-600 text-4xl mb-5 transition-transform duration-500 group-hover:scale-110">
              🔐
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Enterprise Security
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              End-to-end encryption, JWT authentication, and robust 
              validation ensure secure financial operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out">
            <div className="text-indigo-600 text-4xl mb-5 transition-transform duration-500 group-hover:scale-110">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              High Performance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimized APIs and scalable backend architecture 
              provide fast and reliable transaction processing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out">
            <div className="text-indigo-600 text-4xl mb-5 transition-transform duration-500 group-hover:scale-110">
              📈
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Scalable Architecture
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built using the MERN stack to ensure scalability, 
              maintainability, and future-ready growth.
            </p>
          </div>

        </div>

        {/* Footer Statement */}
        <div className="text-center border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-sm tracking-wide">
            Transforming digital banking with technology, innovation, and security.
          </p>
        </div>

      </div>

    </div>
  );
};

export default AboutPage;