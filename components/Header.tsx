import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-24 sm:w-28 md:w-32 h-8 rounded-md flex items-center justify-center">
              <a href="https://www.soniclabs.com/">
                <Image
                  width={96}
                  height={24}
                  src="/sonic-logo.svg"
                  alt="Sonic Logo"
                  className="w-24 h-6"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-6 w-full md:w-auto">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base text-gray-100 hover:text-white font-medium">
                Learn
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base text-gray-100 hover:text-white font-medium">
                Community
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="bg-black/85 border border-gray-700 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base text-gray-300 hover:text-white hover:border-gray-600 transition-colors flex items-center gap-2">
                <span>Add Sonic</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <button className="bg-black/85 border border-gray-700 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base text-gray-300 hover:text-white hover:border-gray-600 transition-colors">
                Airdrop
              </button>
              <button className="bg-black/85 border border-gray-700 p-2 rounded-full text-orange-400 hover:text-orange-300 transition-colors">
                <span className="text-base sm:text-lg">🔔</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
