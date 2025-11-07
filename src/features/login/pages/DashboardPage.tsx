import { useState } from "react";
import {
  Bell,
  Search,
  Heart,
  MessageCircle,
  TrendingUp,
  Crown,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Github } from "lucide-react";
import announcement from "../../../assets/images/announcement.png";
// Fake data for announcements
const announcements = [
  {
    id: 1,
    user: {
      name: "Mahmoud Emad",
      role: "Vice Leader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mahmoud",
      time: "1h",
    },
    content:
      "Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    likes: 12,
    comments: 2,
    image: null,
  },
  {
    id: 2,
    user: {
      name: "Mahmoud Emad",
      role: "Vice Leader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mahmoud2",
      time: "1h",
    },
    content:
      "Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    likes: 12,
    comments: 2,
    image: announcement,
  },
];

const topRatedUsers = [
  {
    id: 1,
    name: "Mahmoud Emad",
    level: "Level 1",
    points: 2500,
    rank: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
  },
  {
    id: 2,
    name: "Mahmoud Emad",
    level: "Level 1",
    points: 2400,
    rank: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2",
  },
  {
    id: 3,
    name: "Mahmoud Emad",
    level: "Level 1",
    points: 1500,
    rank: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user3",
  },
  {
    id: 4,
    name: "Mahmoud Emad",
    level: "Level 1",
    points: 1200,
    rank: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user4",
  },
];

export const DashboardPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleTheme = () => setDarkMode(!darkMode);

  const bgClass = darkMode ? "bg-[#0E0E10]" : "bg-[#EAEEF3]";
  const cardBgClass = darkMode ? "bg-gray-800" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-900";
  const secondaryTextClass = darkMode ? "text-gray-400" : "text-gray-600";
  const navBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const inputBgClass = darkMode ? "bg-gray-700" : "bg-gray-100";

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/home", { replace: true });
    //Force reload to ensure clean state
    window.location.href = "/home";
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return  darkMode ? "bg-[#E79A0C]" : "bg-[#FFB52B]";
      case 2:
        return darkMode ? "bg-[#E79A0C]" : "bg-[#FFB52B]";
      case 3:
        return darkMode ? "bg-[#E79A0C]" : "bg-[#FFB52B]";
      default:
        return darkMode ? "bg-[#E79A0C]" : "bg-[#FFB52B]";
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Navigation Header */}
      <nav
        className={`${navBgClass} shadow-md sticky top-0 z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-5xl font-bold text-blue-600">∞</div>
              <span className="text-2xl font-bold text-blue-600">Neura</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Home
              </button>
              <button
                className={`${secondaryTextClass} hover:text-blue-600 transition-colors`}
              >
                Courses
              </button>
              <button
                className={`${secondaryTextClass} hover:text-blue-600 transition-colors`}
              >
                Problems
              </button>
              <button
                className={`${secondaryTextClass} hover:text-blue-600 transition-colors`}
              >
                Community
              </button>
              <button
                className={`${secondaryTextClass} hover:text-blue-600 transition-colors`}
              >
                Resources
              </button>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun size={20} className={textClass} />
                ) : (
                  <Moon size={20} className={textClass} />
                )}
              </button>

              <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Bell size={20} className={textClass} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <LogOut size={20} className={textClass} />
              </button>

              <div
                onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden cursor-pointer hover:scale-105 transition-transform border-2 border-[#0061EF] "
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=currentuser"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Announcements */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className={`text-3xl font-bold ${textClass} mb-6`}>
              Announcements
            </h1>

            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`${cardBgClass} rounded-2xl shadow-md p-6 transition-colors duration-300`}
              >
                {/* Post Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden flex-shrink-0 border-2 border-[#0061EF]">
                    <img
                      src={announcement.user.avatar}
                      alt={announcement.user.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${textClass}`}>
                      {announcement.user.name}
                    </h3>
                    <p className={`text-sm ${secondaryTextClass}`}>
                      {announcement.user.role}
                    </p>
                    <p className={`text-xs ${secondaryTextClass}`}>
                      {announcement.user.time}
                    </p>
                  </div>
                </div>

                {/* Post Content */}
                <p className={`${secondaryTextClass} mb-4 leading-relaxed`}>
                  {announcement.content}
                </p>

                {/* Post Image */}
                {announcement.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={announcement.image}
                      alt="Announcement"
                      className="w-70 h-70"
                    />
                  </div>
                )}

                {/* Post Stats */}
                <div
                  className={`flex items-center justify-between pt-4  ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <span className={`text-sm ${secondaryTextClass}`}>
                    {announcement.likes} Person
                  </span>
                  <span className={`text-sm ${secondaryTextClass}`}>
                    {announcement.comments} Comment
                  </span>
                </div>

                {/* Action Buttons */}
                <div
                  className={`flex items-center gap-4 mt-4 pt-4 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors ml-auto">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Top Rated & Search */}
          <div className="space-y-6">
            {/* Search Box */}
            <div
              className={`${cardBgClass} rounded-2xl shadow-md p-4 transition-colors duration-300`}
            >
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 "
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Find User"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${inputBgClass} ${textClass} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                />
              </div>
            </div>

            {/* Top Rated Section */}
            <div
              className={`${cardBgClass} rounded-2xl shadow-md p-6 transition-colors duration-300`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2
                  className={`text-xl font-bold ${textClass} flex items-center gap-2`}
                >
                  Top Rated <TrendingUp size={20} className="text-blue-600" />
                </h2>
                <Crown className="text-yellow-500" size={24} />
              </div>

              <div className="space-y-4">
                {topRatedUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      user.rank === 1
                        ? darkMode ? "bg-[#364255]" : "bg-[#BFD9FF]"
                        : user.rank === 2
                        ? darkMode ? "bg-[#364255]" : "bg-[#BFD9FF]"
                        : darkMode ? "bg-[#364255]" : "bg-[#BFD9FF]"
                    } transition-all hover:scale-105 cursor-pointer`}
                  >
                    {/* Rank Badge */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0061EF] shadow-lg">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute -top-1 -left-1 w-6 h-6 ${getRankBadgeColor(
                          user.rank
                        )} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md`}
                      >
                        #{user.rank}
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <h3 className={`font-bold ${textClass}`}>{user.name}</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>
                        {user.level}
                      </p>
                    </div>

                    {/* Points Badge */}
                    <div
                      className={`${getRankBadgeColor(
                        user.rank
                      )} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}
                    >
                      {user.points}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
         <footer
        className={` text-white py-8 mt-16 ${
          darkMode ? "bg-[#121212]" : "bg-[#E0E0E0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="text-3xl font-bold text-blue-600">∞</div>
              <span className="text-xl font-semibold text-blue-600">Neura</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors group ${
                  darkMode
                    ? "border-[#0061EF] hover:border-blue-500 hover:bg-blue-500"
                    : "border-[#0061EF] hover:border-blue-600 hover:bg-blue-600"
                }`}
              >
                <Facebook
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-white-400 group-hover:text-white"
                      : "text-black group-hover:text-white"
                  }`}
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors group ${
                  darkMode
                    ? "border-[#0061EF] hover:border-blue-500 hover:bg-blue-500"
                    : "border-[#0061EF] hover:border-blue-600 hover:bg-blue-600"
                }`}
              >
                <Linkedin
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-white-400 group-hover:text-white"
                      : "text-black group-hover:text-white"
                  }`}
                />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors group ${
                  darkMode
                    ? "border-[#0061EF] hover:border-gray-400 hover:bg-gray-700"
                    : "border-[#0061EF] hover:border-gray-900 hover:bg-gray-900"
                }`}
              >
                <Github
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-white-400 group-hover:text-white"
                      : "text-black group-hover:text-white"
                  }`}
                />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Fast Links
              </span>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Home
              </a>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Courses
              </a>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Problems
              </a>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Community
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8  border-gray-800">
            <p
              className={`text-sm hover:text-white transition-colors ${
                darkMode ? "text-[#93C5FD]" : "text-black"
              }`}
            >
              © 2025 Cubed Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
