interface CourseCardProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  link: string;
}

const levelConfig = {
  beginner: {
    bgColor: "bg-green-500",
    textColor: "text-white",
    label: "Beginner",
  },
  intermediate: {
    bgColor: "bg-orange-500",
    textColor: "text-black",
    label: "Intermediate",
  },
  advanced: {
    bgColor: "bg-red-500",
    textColor: "text-white",
    label: "Advanced",
  },
};

export default function CourseCard({
  title,
  description,
  level,
  link,
}: CourseCardProps) {
  const levelStyle = levelConfig[level];

  return (
    <div className="group relative w-full max-w-[363px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative bg-black border border-gray-700 rounded-3xl p-6 transition-all duration-300 hover:border-gray-600">
        {/* Border overlay */}
        <div className="absolute inset-0 border border-gray-700 rounded-3xl pointer-events-none" />

        {/* Content Container - Changed to flexbox layout */}
        <div className="relative w-full min-h-[229px] flex flex-col">
          {/* Level Badge - Moved to absolute positioning in top-right */}
          <div
            className={`absolute top-0 right-0 ${levelStyle.bgColor} rounded-lg px-3 py-1 transition-transform duration-200 group-hover:scale-105 z-10`}
          >
            <span className={`font-bold text-base ${levelStyle.textColor}`}>
              {levelStyle.label}
            </span>
          </div>

          {/* Sonic Icon */}
          <div className="absolute left-[-7px] top-0 w-28 h-28 transition-transform duration-300 group-hover:rotate-6 z-0">
            <div className="relative w-28 h-28 overflow-hidden rounded-2xl">
              {/* Sonic Logo Background */}
              <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center relative">
                {/* Sonic Logo Simplified */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">S</span>
                    </div>
                  </div>
                  {/* Animated rings */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse" />
                  <div className="absolute inset-1 border border-orange-300/30 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Flexible spacing from icon */}
          <div className="mt-32 space-y-3 flex-1 min-h-0">
            <div className="space-y-2">
              {/* Title - Allow wrapping with max lines */}
              <h3 className="text-white font-semibold text-3xl leading-8 transition-colors duration-200 group-hover:text-orange-200 line-clamp-2">
                {title}
              </h3>

              {/* Description - Allow wrapping with max lines */}
              <p className="text-gray-100 font-medium text-base leading-6 transition-colors duration-200 group-hover:text-gray-200 line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Action Link - Positioned at bottom with margin */}
          <div className="mt-4 transition-transform duration-200 group-hover:translate-x-1">
            <a
              href={link}
              className="inline-flex items-center gap-1 backdrop-blur-sm backdrop-filter rounded-full pl-0 pr-6 py-2 transition-all duration-300 hover:bg-white/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-400 font-bold text-base transition-colors duration-200 group-hover:text-orange-300">
                Go to docs
              </span>
              <div className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-orange-400 transition-colors duration-200 group-hover:text-orange-300"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
