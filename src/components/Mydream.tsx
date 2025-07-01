import { ArrowRight } from "lucide-react";

const Mydream = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto min-h-[600px]">
        {/* Main Hero Text Block - Spans 2 columns */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Driving Innovation at the Intersection of
              <span className="text-lime-400"> Aviation </span>
              and
              <span className="text-lime-400"> Data</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              We transform complex aviation data into actionable insights,
              driving operational excellence and competitive advantage for
              airlines worldwide.
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 group">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Aviation Image Block */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80"
            alt="Aviation technology and innovation"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Stats Block */}
        <div className="bg-lime-400 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-black opacity-10 rounded-full"></div>
          <div className="relative z-10">
            <div className="text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-sm text-black/80 font-medium mb-4">
              Data Models Deployed
            </div>
            <div className="text-2xl font-bold text-black mb-1">99.9%</div>
            <div className="text-sm text-black/80 font-medium">
              System Reliability
            </div>
          </div>
        </div>

        {/* Technology Focus */}
        <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Next-Gen Aviation Analytics
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Leveraging machine learning, real-time processing, and advanced
              visualization to unlock the full potential of your aviation data
              ecosystem.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-24 h-24 bg-lime-400 rounded-full">
            <svg
              className="w-12 h-12 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>

        {/* Partnership Block */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
            alt="Team collaboration and partnership"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold text-sm mb-1">Trusted Partners</h4>
            <p className="text-xs text-gray-200">Leading airlines worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mydream;
