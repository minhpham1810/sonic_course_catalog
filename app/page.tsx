import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-7xl mx-auto px-16 py-24">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-8xl font-medium text-gray-100 mb-8 font-urbanist">
            Learn with Sonic
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl leading-10 font-urbanist">
            Unlock creativity and mastery with Sonic's courses—each designed to
            equip developers with the knowledge and skills to create, explore,
            and innovate.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              level={course.level as "beginner" | "intermediate" | "advanced"}
              link={course.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
