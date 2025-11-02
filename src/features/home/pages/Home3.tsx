import React, { useState } from "react";
import { Sun, Moon, Database, Sparkles, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className={`text-3xl font-bold ${
              isDarkMode ? "text-blue-500" : "text-blue-600"
            }`}
          >
            ∞
          </div>
          <span className="text-2xl font-bold text-blue-600">Neura</span>
        </div>

        {/* Nav Links */}
        <div
          className={`flex items-center gap-8 px-8 py-3 rounded-full ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <a href="#home" className="text-blue-500 font-medium">
            Home
          </a>
          <a
            href="#about"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            About Us
          </a>
          <a
            href="#achievements"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            Achievements
          </a>
          <a
            href="#services"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            Services
          </a>
          <a
            href="#courses"
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            Courses
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 py-20 flex flex-col items-center justify-center text-center">
        {/* Floating Icons */}
        <Database
          className={`absolute left-32 top-32 w-12 h-12 ${
            isDarkMode ? "text-blue-500" : "text-blue-600"
          } opacity-80`}
        />
        <Code
          className={`absolute right-32 top-32 w-12 h-12 ${
            isDarkMode ? "text-blue-500" : "text-blue-600"
          } opacity-80`}
        />
        <Sparkles
          className={`absolute left-48 top-64 w-8 h-8 ${
            isDarkMode ? "text-blue-400" : "text-blue-500"
          } opacity-60`}
        />

        <h1 className="text-6xl font-bold mb-6 max-w-4xl">
          Up Your Skills To Be
          <br />a good <span className="text-blue-500">Problem Solver</span>
        </h1>

        <p
          className={`text-lg mb-8 max-w-2xl ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Welcome to Fayoum ICPC Student Community. Learning,
          <br />
          Practicing, and Competing Together in Problem Solving.
        </p>

        <button
          className={`px-8 py-3 rounded-full border-2 font-medium transition-all ${
            isDarkMode
              ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          See More
        </button>
      </section>

      {/* Cards Section */}
      <section className="px-8 pb-20 grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Competition Card */}
        <div
          className={`rounded-2xl p-6 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } overflow-hidden`}
        >
          <div
            className={`h-64 rounded-xl mb-4 flex items-center justify-center ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <div
              className={`text-6xl ${
                isDarkMode ? "text-gray-700" : "text-gray-300"
              }`}
            >
              📸
            </div>
          </div>
          <h3 className="text-2xl font-bold text-blue-500">
            {"{"}
            <span className="text-blue-400">Competition</span>
            {"}"}
          </h3>
        </div>

        {/* Center Card */}
        <div
          className={`rounded-2xl p-6 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <div
            className={`rounded-xl p-8 mb-4 text-center ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <h3 className="text-3xl font-bold text-blue-500 mb-6">
              We push ourselves forward ;
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-lg p-4 flex items-center justify-center ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <div
                  className={`text-4xl ${
                    isDarkMode ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  🏆
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* One Team Card */}
        <div
          className={`rounded-2xl p-6 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } overflow-hidden`}
        >
          <div
            className={`h-64 rounded-xl mb-4 flex items-center justify-center ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <div
              className={`text-6xl ${
                isDarkMode ? "text-gray-700" : "text-gray-300"
              }`}
            >
              📸
            </div>
          </div>
          <h3 className="text-2xl font-bold text-blue-500">
            {"<"}
            <span className="text-blue-400">One Team</span>
            {"/>"}
          </h3>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-6xl font-bold text-white mb-2">+1000</div>
            <div className="text-2xl font-semibold text-white">student</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white mb-2">+20</div>
            <div className="text-2xl font-semibold text-white">
              Explained Topic
            </div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white mb-2">+50</div>
            <div className="text-2xl font-semibold text-white">Context</div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-3xl p-12 flex items-center justify-between ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-8">
                Who we Are ?
              </h2>

              <div className="space-y-6 text-white">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">•</span>
                  <p className="text-lg leading-relaxed">
                    We are a community of passionate programmers dedicated to
                    competitive programming.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">•</span>
                  <p className="text-lg leading-relaxed">
                    United by a love for coding challenges, we foster learning,
                    collaboration, and growth.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">•</span>
                  <p className="text-lg leading-relaxed">
                    Our focus is excellence in algorithmic problem-solving and
                    contests like the ACPC.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 ml-16">
              <div className="w-80 h-64 flex items-center justify-center">
                <div className="text-9xl opacity-50">🧑‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-3xl p-12 flex items-center justify-between ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="flex-shrink-0 mr-16">
              <div className="w-80 h-64 flex items-center justify-center">
                <div className="text-9xl opacity-50">🎯</div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-8">Our Goal</h2>

              <div className="space-y-4 text-white text-lg leading-relaxed">
                <p>
                  Our goal is to develop world-class programmers who shine in
                  ACPC and ICPC.
                </p>

                <p>
                  We aim to qualify teams for World Finals, offer training for
                  all levels, promote mentorship, and build a lasting impact in
                  the programming community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Image Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <div
              className={`h-96 flex items-center justify-center ${
                isDarkMode ? "bg-gray-900" : "bg-gray-100"
              }`}
            >
              <div className="text-9xl opacity-50">🎉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`rounded-3xl p-12 mb-16 flex items-center justify-between ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-white text-lg">
                Celebrating our journey of success in competitive
                <br />
                programming and ACPC qualifications
              </p>
            </div>
            <div className="flex-shrink-0 ml-16">
              <div className="w-64 h-32 flex items-center justify-center">
                <div className="text-7xl opacity-50">🏆</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-300"
              } transform -translate-x-1/2`}
            ></div>

            {/* Achievement Items */}
            <div className="space-y-24">
              {/* ECPC 2025 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-16 text-right">
                  <div
                    className={`inline-block rounded-2xl overflow-hidden ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-100"
                    } p-3`}
                  >
                    <div className="w-64 h-40 flex items-center justify-center bg-gray-800 rounded-xl">
                      <div className="text-5xl">🏅</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>

                <div className="w-1/2 pl-16">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ECPC 2025 Qualifiers
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    3 Giza/Sadat Vii Temp Team
                    <br />
                    Ranked : 2 St.
                  </p>
                </div>
              </div>

              {/* ECPC 2025 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-16 text-right">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ECPC 2025 Qualifiers
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Taalaam 4n4ly Team
                    <br />
                    Ranked : 46th
                  </p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-black"></div>

                <div className="w-1/2 pl-16">
                  <div
                    className={`inline-block rounded-2xl overflow-hidden ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-100"
                    } p-3`}
                  >
                    <div className="w-64 h-40 flex items-center justify-center bg-gray-800 rounded-xl">
                      <div className="text-5xl">🏅</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ECPC 2024 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-16 text-right">
                  <div
                    className={`inline-block rounded-2xl overflow-hidden ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-100"
                    } p-3`}
                  >
                    <div className="w-64 h-40 flex items-center justify-center bg-gray-800 rounded-xl">
                      <div className="text-5xl">🏅</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>

                <div className="w-1/2 pl-16">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ECPC 2024 Qualifiers
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    El Tawba El Soubatry Team
                    <br />
                    Ranked : 23rd ACPC
                  </p>
                </div>
              </div>

              {/* ACPC 2023 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-16 text-right">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ACPC 2023 Qualifiers
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Big Data NN Team
                  </p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>

                <div className="w-1/2 pl-16">
                  <div
                    className={`inline-block rounded-2xl overflow-hidden ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-100"
                    } p-3`}
                  >
                    <div className="w-64 h-40 flex items-center justify-center bg-gray-800 rounded-xl">
                      <div className="text-5xl">🏅</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`rounded-3xl p-12 mb-16 flex items-center justify-between ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-white text-lg max-w-2xl">
                A comprehensive platform designed to elevate your competitive
                programming skills with cutting-edge tools and community support
              </p>
            </div>
            <div className="flex-shrink-0 ml-16">
              <div className="w-64 h-32 flex items-center justify-center">
                <div className="text-7xl opacity-50">💼</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Full Course Catalog */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Course Catalog</h3>
              <p className="text-gray-600 leading-relaxed">
                Depending on the level you are at, a full explanation of the
                whole course curriculum, and understand all the details of every
                lecture and sheet of problems on every level to improve you
              </p>
            </div>

            {/* Interactive Learning */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Education is delivered through interactive, whether it is online
                or offline, a live lecture or through a community-specific to
                earn the knowledge, student can easily hand-to-hand learn
              </p>
            </div>

            {/* Real-Time Contests */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Contests</h3>
              <p className="text-gray-600 leading-relaxed">
                Many competitions are held on an ongoing basis to qualify you
                for ACPC to help you develop in an atmosphere of fair
                competition through the use of a computer which is monitoring
              </p>
            </div>

            {/* Smart Notifications */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Sending notifications of lecture, live exam dates and results
                and any updates periodically through a special notifications
                page and by e-mail
              </p>
            </div>

            {/* Personalized Dashboard */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Personalized Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A dashboard with all your details, such as the courses you've
                finished, your rank, number of problems solved, and an analysis
                of your skills and records on your level to help you improve
              </p>
            </div>

            {/* Friendly use */}
            <div
              className={`rounded-2xl p-8 ${
                isDarkMode
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Friendly use</h3>
              <p className="text-gray-600 leading-relaxed">
                An easy-to-use platform with no distractions, and a guide to
                guide you through our most important features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`rounded-3xl p-12 mb-16 flex items-center justify-between ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="flex-shrink-0 mr-12">
              <div className="w-32 h-32 flex items-center justify-center">
                <div className="text-7xl">📚</div>
              </div>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-5xl font-bold text-white mb-4">
                Course Levels
              </h2>
              <p className="text-white text-lg">
                Structured learning path from fundamentals to advanced
                competitive programming
              </p>
            </div>
          </div>

          {/* Course Cards */}
          <div className="space-y-8">
            {/* Foundation Level */}
            <div
              className={`rounded-3xl p-8 ${
                isDarkMode ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-8">
                {/* Left Side - Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 flex items-center justify-center bg-blue-50 rounded-2xl">
                    <div className="text-8xl">💻</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      LEVEL 1
                    </span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">
                    Foundation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Build a strong understanding of programming fundamentals and
                    problem-solving basics
                  </p>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Topics Covered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Algos I Merge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Programming Fundmnt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Data Structur Types</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Basic Mathematics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Greedy Algorithm Application
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Basic Recursion</span>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Explore Foundation Courses
                  </button>
                </div>
              </div>
            </div>

            {/* Intermediate Level */}
            <div
              className={`rounded-3xl p-8 ${
                isDarkMode ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-8">
                {/* Left Side - Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 flex items-center justify-center bg-blue-50 rounded-2xl">
                    <div className="text-8xl">⚙️</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      LEVEL 2
                    </span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">
                    Intermediate
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Master essential algorithms and data structures, tackling
                    more complex problems
                  </p>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Topics Covered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Linked Lists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Greedy Advance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Stack Searching Algorithms
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Data Binary Search Trees
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Dynamic Programming Basics
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Recursion Engienering
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Advanced Getting Algorithms
                      </span>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Explore Intermediate Courses
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Level */}
            <div
              className={`rounded-3xl p-8 ${
                isDarkMode ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-8">
                {/* Left Side - Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 flex items-center justify-center bg-blue-50 rounded-2xl">
                    <div className="text-8xl">🚀</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      LEVEL 3
                    </span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">
                    Advanced
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tackle complex algorithms and competitive programming
                    strategies
                  </p>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Topics Covered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Black Squares-Blacks Techniques
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Advanced Graph Algorithms
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">Game Theory I Work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        String Matching Swith Z Function
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Dynamic Programming Optimization
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Computational Geometry
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Number Theory I Work
                      </span>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Explore Advanced Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Support Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`rounded-3xl p-12 mb-16 flex items-center gap-12 ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-48 h-48 flex items-center justify-center">
                <div className="text-9xl">💬</div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-4">
                Our Support
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Some words have the power to lift us up, push us forward, and
                remind us to always do our best no matter how hard things get.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-6">
              {/* Testimonial Card 1 */}
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-white" : "bg-gray-100"
                } border-l-4 border-blue-600`}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Education is delivered through interaction, whether with the
                  mentor during the lecture or through a community specific to
                  each level, which the student can ask any questions
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">Mahmoud Emad</p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-white" : "bg-gray-100"
                } border-l-4 border-blue-600`}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Education is delivered through interaction, whether with the
                  mentor during the lecture or through a community specific to
                  each level, which the student can ask any questions
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">Mahmoud Emad</p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-white" : "bg-gray-100"
                } border-l-4 border-blue-600`}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Education is delivered through interaction, whether with the
                  mentor during the lecture or through a community specific to
                  each level, which the student can ask any questions
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">Mahmoud Emad</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`px-8 py-20 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-3xl p-16 text-center ${
              isDarkMode ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                  isDarkMode ? "bg-blue-700" : "bg-blue-600"
                }`}
              >
                <span className="text-2xl">🎯</span>
                <span className="text-white font-medium">
                  Join Our Community
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>

            {/* Description */}
            <p className="text-white text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of students already mastering competitive
              programming with our comprehensive platform
            </p>

            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-12 py-4 rounded-full transition-colors shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`px-8 py-16 ${isDarkMode ? "bg-black" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-blue-500" : "text-blue-600"
                }`}
              >
                ∞
              </div>
              <span
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                SkillNet
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            {/* Fast Links */}
            <div className="flex items-center gap-6">
              <span
                className={`font-semibold ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Fast Links
              </span>
              <a
                href="#home"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Home
              </a>
              <a
                href="#courses"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Courses
              </a>
              <a
                href="#problems"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Problems
              </a>
              <a
                href="#community"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Community
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 Cubed Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
