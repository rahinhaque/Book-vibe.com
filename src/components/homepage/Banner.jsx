import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full bg-[#0A071E] overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          </div>

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
              <p className="text-white/80 uppercase tracking-widest font-bold text-xs">
                New Arrivals Weekly
              </p>
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] font-serif">
              Stories that <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                move
              </span>{" "}
              the soul
            </h1>

            <p className="text-white/60 text-lg lg:text-xl max-w-xl mb-12 leading-relaxed">
              Discover curated books across every genre. From timeless classics
              to today's bestsellers — your next obsession is waiting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                to="/books"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-[#0A071E] font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                Browse Collection
              </Link>
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                View Reading List
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-20">
              <div>
                <p className="text-3xl font-bold text-white mb-1">12k+</p>
                <p className="text-white/40 text-sm uppercase tracking-wider">
                  Books listed
                </p>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                  4.9<span className="text-yellow-500 text-2xl">★</span>
                </p>
                <p className="text-white/40 text-sm uppercase tracking-wider">
                  Avg rating
                </p>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-white mb-1">80k</p>
                <p className="text-white/40 text-sm uppercase tracking-wider">
                  Readers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-lg">
            <div className="relative animate-float">
              {/* Image Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />

              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured Book"
                className="w-full h-auto object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)] rounded-2xl border border-white/5"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                }}
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
