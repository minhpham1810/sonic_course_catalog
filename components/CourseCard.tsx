import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="group relative w-full max-w-[363px] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
      <Card
        className={cn(
          "relative bg-[#131315] border border-[#506077] rounded-[24px] p-[25px] transition-all duration-500 hover:border-gray-500 hover:shadow-lg overflow-hidden",
          // Override shadcn defaults to match current design
          "shadow-sm border-[#506077] bg-[#131315] text-card-foreground gap-0 py-[25px] px-[25px]"
        )}
      >
        {/* Subtle border overlay */}
        <div className="absolute inset-0 border border-[#506077] rounded-[24px] pointer-events-none transition-colors duration-500 group-hover:border-gray-500" />

        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <CardContent className="relative w-[313px] h-[229px] p-0">
          {/* Content Container - Fixed height matching Figma */}
          {/* Level Badge - Positioned exactly as in Figma */}
          <Badge
            className={cn(
              `absolute right-0 top-[214px] ${levelStyle.bgColor} rounded-[10px] px-3 py-1 h-[20px] w-[114px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`,
              // Override shadcn defaults to match current design
              "border-transparent text-base font-bold leading-none font-urbanist",
              levelStyle.textColor
            )}
          >
            {levelStyle.label}
          </Badge>

          {/* Sonic Logo - 81fd9bb30626ba399ef3271aa789d04a8f1a7458-128x128.svg fill */}
          <div className="absolute left-[-7px] top-0 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            {/* Auto layout container - 112x112px */}
            <div className="flex flex-col justify-center items-center p-0 w-[112px] h-[112px] flex-none order-0 flex-grow-0 overflow-visible">
              {/* Component 2 - Main container */}
              <div className="w-[112px] h-[112px] flex-none order-0 flex-grow-0 relative">
                {/* Vector elements with exact Figma positioning and transforms */}

                {/* Vector 1 - Hidden background with transform matrix(0.7, 0.71, -0.7, 0.71) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "2.56%",
                    right: "38.7%",
                    top: "2.22%",
                    bottom: "21.85%",
                    background: "#D9D9D9",
                    transform: "matrix(0.7, 0.71, -0.7, 0.71, 0, 0)",
                  }}
                />

                {/* Vector 2 - Hidden gradient with transform matrix(0.7, 0.71, -0.7, 0.71) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "2.56%",
                    right: "38.7%",
                    top: "2.22%",
                    bottom: "21.85%",
                    background:
                      "linear-gradient(270deg, #214E81 -2.44%, #506077 35.17%, #BF5F38 64.95%, #FFC966 101%)",
                    transform: "matrix(0.7, 0.71, -0.7, 0.71, 0, 0)",
                  }}
                />

                {/* Vector 3 - Hidden border with transform matrix(0.7, 0.71, -0.7, 0.71) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "2.56%",
                    right: "38.7%",
                    top: "2.22%",
                    bottom: "21.85%",
                    border: "0.875px solid #131315",
                    transform: "matrix(0.7, 0.71, -0.7, 0.71, 0, 0)",
                  }}
                />

                {/* Vector 4 - Hidden background with transform matrix(0.86, 0.5, -0.5, 0.87) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "5.75%",
                    right: "35.62%",
                    top: "2.27%",
                    bottom: "21.67%",
                    background: "#D9D9D9",
                    transform: "matrix(0.86, 0.5, -0.5, 0.87, 0, 0)",
                  }}
                />

                {/* Vector 5 - Hidden gradient with transform matrix(0.86, 0.5, -0.5, 0.87) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "5.75%",
                    right: "35.62%",
                    top: "2.27%",
                    bottom: "21.67%",
                    background:
                      "linear-gradient(270deg, #214E81 -2.2%, #506077 35.41%, #BF5F38 65.19%, #FFC966 101.24%)",
                    transform: "matrix(0.86, 0.5, -0.5, 0.87, 0, 0)",
                  }}
                />

                {/* Vector 6 - Hidden border with transform matrix(0.86, 0.5, -0.5, 0.87) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "5.75%",
                    right: "35.62%",
                    top: "2.27%",
                    bottom: "21.67%",
                    border: "0.875px solid #131315",
                    transform: "matrix(0.86, 0.5, -0.5, 0.87, 0, 0)",
                  }}
                />

                {/* Vector 7 - Hidden background with transform matrix(0.97, 0.26, -0.26, 0.97) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "11.95%",
                    right: "29.5%",
                    top: "5.57%",
                    bottom: "18.26%",
                    background: "#D9D9D9",
                    transform: "matrix(0.97, 0.26, -0.26, 0.97, 0, 0)",
                  }}
                />

                {/* Vector 8 - Hidden gradient with transform matrix(0.97, 0.26, -0.26, 0.97) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "11.95%",
                    right: "29.5%",
                    top: "5.57%",
                    bottom: "18.26%",
                    background:
                      "linear-gradient(270deg, #214E81 -1.98%, #506077 35.64%, #BF5F38 65.42%, #FFC966 101.47%)",
                    transform: "matrix(0.97, 0.26, -0.26, 0.97, 0, 0)",
                  }}
                />

                {/* Vector 9 - Hidden border with transform matrix(0.97, 0.26, -0.26, 0.97) */}
                <div
                  className="absolute opacity-0"
                  style={{
                    left: "11.95%",
                    right: "29.5%",
                    top: "5.57%",
                    bottom: "18.26%",
                    border: "0.875px solid #131315",
                    transform: "matrix(0.97, 0.26, -0.26, 0.97, 0, 0)",
                  }}
                />

                {/* Vector 10 - Main circular background (visible) */}
                <div
                  className="absolute transition-all duration-500 group-hover:bg-gray-800"
                  style={{
                    left: "20.74%",
                    right: "20.74%",
                    top: "11.9%",
                    bottom: "11.9%",
                    background: "#131315",
                    border: "0.875px solid #F5F5F5",
                  }}
                >
                  {/* Vector 11 - Speed line 1 */}
                  <div
                    className="absolute"
                    style={{
                      left: "30.32%",
                      right: "41.88%",
                      top: "28.52%",
                      bottom: "71.48%",
                      border: "0.875px solid #FFEDD6",
                    }}
                  />

                  {/* Vector 12 - Speed line 2 */}
                  <div
                    className="absolute"
                    style={{
                      left: "30.32%",
                      right: "30.33%",
                      top: "39.59%",
                      bottom: "60.41%",
                      border: "0.875px solid #FFEDD6",
                    }}
                  />

                  {/* Vector 13 - Speed line 3 */}
                  <div
                    className="absolute"
                    style={{
                      left: "30.32%",
                      right: "30.33%",
                      top: "50.65%",
                      bottom: "49.35%",
                      border: "0.875px solid #FFEDD6",
                    }}
                  />

                  {/* Vector 14 - Speed line 4 */}
                  <div
                    className="absolute"
                    style={{
                      left: "30.32%",
                      right: "30.33%",
                      top: "61.71%",
                      bottom: "38.29%",
                      border: "0.875px solid #FFEDD6",
                    }}
                  />

                  {/* Vector 15 - Speed line 5 */}
                  <div
                    className="absolute"
                    style={{
                      left: "30.32%",
                      right: "30.33%",
                      top: "72.78%",
                      bottom: "27.22%",
                      border: "0.875px solid #FFEDD6",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="absolute left-0 top-[132px] w-full">
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-[#f5f5f5] font-semibold text-[23px] leading-[25px] transition-all duration-300 group-hover:text-orange-200 font-urbanist line-clamp-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[#f5f5f5] font-small text-base leading-6 transition-colors duration-300 group-hover:text-gray-200 font-urbanist line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Action Link - Positioned exactly as in Figma */}
          <div className="absolute left-0 top-[206px] transition-transform duration-300 group-hover:translate-x-2">
            <Button
              asChild
              className={cn(
                "inline-flex items-center gap-1 backdrop-blur-sm backdrop-filter rounded-full pl-0 pr-6 py-2 transition-all duration-300 hover:bg-white/10",
                // Override shadcn defaults to match current design
                "h-auto p-0 pl-0 pr-6 py-2 bg-transparent border-0 shadow-none hover:bg-white/10 text-[#ffc966] hover:text-orange-300"
              )}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <span className="font-bold text-base transition-colors duration-300 group-hover:text-orange-300 font-urbanist leading-6 flex items-center justify-center w-full">
                  Start Learning
                </span>

                {/* External link icon */}
                <div className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#ffc966] transition-colors duration-300 group-hover:text-orange-300"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[3px]"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[3px]"
                    />
                  </svg>
                </div>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
