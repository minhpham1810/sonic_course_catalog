"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import LiquidEther from "@/components/LiquidEther";
import courses from "@/data/courses";
import DotGrid from "@/components/DotGrid";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) {
      return courses;
    }

    const query = searchQuery.toLowerCase();
    return courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.level.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className="min-h-screen bg-black relative">
      {/* LiquidEther Background - Fixed full-screen background */}
      <div className="fixed inset-0 z-0">
        {/* <LiquidEther
          mouseForce={25}
          cursorSize={150}
          resolution={0.35}
          colors={["#214E81", "#506077", "#BF5F38", "#FFC966", "#5227FF"]}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          className="w-full h-full opacity-25"
          isViscous={false}
          BFECC={true}
          dt={0.014}
          isBounce={false}
        /> */}
        <DotGrid />
      </div>

      {/* Content Layer - Above background */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-gray-100 mb-6 sm:mb-8 font-urbanist leading-tight">
              Learn with Sonic
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed sm:leading-9 font-urbanist">
              Unlock creativity and mastery with Sonic&apos;s courses—each
              designed to equip developers with the knowledge and skills to
              create, explore, and innovate.
            </p>
          </div>

          {/* Search Bar Section */}
          <div className="mb-12 md:mb-16">
            <SearchBar
              placeholder="Search courses by title, level, or topic..."
              onSearch={handleSearch}
            />
          </div>

          {/* Results Summary */}
          {searchQuery && (
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-300 font-urbanist">
                {filteredCourses.length === 0
                  ? `No courses found for "${searchQuery}"`
                  : `Found ${filteredCourses.length} course${
                      filteredCourses.length !== 1 ? "s" : ""
                    } for "${searchQuery}"`}
              </p>
            </div>
          )}

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {filteredCourses.length === 0 && searchQuery ? (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl text-gray-300 font-urbanist mb-2">
                  No courses found
                </h3>
                <p className="text-gray-400 font-urbanist">
                  Try adjusting your search terms or browse all available
                  courses.
                </p>
              </div>
            ) : (
              filteredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  level={
                    course.level as "beginner" | "intermediate" | "advanced"
                  }
                  link={course.link}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
