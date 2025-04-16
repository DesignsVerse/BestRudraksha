import React from "react";

const Newsletter = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8F0] py-12">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#800000]">
          {/* Golden border effect */}
          <div className="absolute inset-0 border-2 border-yellow-600/20 rounded-xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 xl:px-14 py-12">
            <div className="max-w-[500px] w-full">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <h2 className="text-white font-bold text-xl sm:text-2xl xl:text-3xl font-serif tracking-wide">
                  Spiritual Updates & Sacred Offers
                </h2>
              </div>
              <p className="text-white/90 font-light text-sm sm:text-base">
                Join our divine community to receive blessings, exclusive Rudraksha offers, 
                and spiritual wisdom directly to your inbox.
              </p>
            </div>

            <div className="max-w-[500px] w-full">
              <form>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#800000]/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your sacred email..."
                      className="w-full pl-10 bg-white/90 border border-yellow-300 outline-none rounded-md placeholder:text-[#800000]/70 py-3.5 px-5 text-[#800000] focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center py-3.5 px-8 text-white bg-[#600000] hover:bg-[#800000] border border-yellow-400 font-medium rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-white/70 text-xs mt-3 italic">
                We respect your privacy. Your email is sacred to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;