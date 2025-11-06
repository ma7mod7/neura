import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Facebook, Linkedin, Github,SearchCode, Users2 } from "lucide-react";
// import { FaMagnifyingGlassCode, FaChildren } from "react-icons/fa6";
import {
  Trophy,
  Target,
  CheckCircle2,
  Award,
  Flame,
  TrendingUp,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Bell, Sun, Moon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  id: string;
  name: string;
  username: string;
  rank: string;
  avatar: string;
  bio?: string;
}

interface UserStats {
  solved: number;
  total: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  acceptanceRate: number;
}

interface StreakData {
  currentStreak: number;
  maxStreak: number;
  totalActiveDays: number;
}

interface ProgressData {
  date: string;
  rating: number;
  level: string;
}

interface ActivityData {
  [date: string]: number;
}

interface Deadline {
  id: string;
  title: string;
  contest: string;
  date: Date;
  isUrgent: boolean;
}

// Mock data
const mockUserProfile: UserProfile = {
  id: "1",
  name: "Mahmoud_Emad_Eldin",
  username: "mahmoud_7oka",
  rank: "Expert",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=currentuser",
  bio: "",
};

const mockUserStats: UserStats = {
  solved: 487,
  total: 2500,
  easy: 245,
  medium: 189,
  hard: 53,
  ranking: 12456,
  acceptanceRate: 68.5,
};

const mockStreakData: StreakData = {
  currentStreak: 23,
  maxStreak: 67,
  totalActiveDays: 234,
};

const mockProgressData: ProgressData[] = [
  { date: "Jan", rating: 890, level: "Newbie" },
  { date: "Feb", rating: 1050, level: "Pupil" },
  { date: "Mar", rating: 1120, level: "Pupil" },
  { date: "Apr", rating: 1260, level: "Specialist" },
  { date: "May", rating: 1340, level: "Specialist" },
  { date: "Jun", rating: 1310, level: "Specialist" },
  { date: "Jul", rating: 1420, level: "Expert" },
  { date: "Aug", rating: 1480, level: "Expert" },
  { date: "Sep", rating: 1510, level: "Expert" },
  { date: "Oct", rating: 1545, level: "Expert" },
  { date: "Nov", rating: 1580, level: "Expert" },
];

const mockDeadlines: Deadline[] = [
  {
    id: "1",
    title: "Weekly Contest 420",
    contest: "LeetCode Weekly",
    date: new Date(2025, 10, 3, 10, 30),
    isUrgent: true,
  },
  {
    id: "2",
    title: "Biweekly Contest 145",
    contest: "LeetCode Biweekly",
    date: new Date(2025, 10, 5, 14, 0),
    isUrgent: false,
  },
  {
    id: "3",
    title: "Codeforces Round 912",
    contest: "Codeforces Div. 2",
    date: new Date(2025, 10, 7, 17, 35),
    isUrgent: false,
  },
  {
    id: "4",
    title: "Educational Round 159",
    contest: "Codeforces Educational",
    date: new Date(2025, 10, 9, 16, 30),
    isUrgent: false,
  },
];

 const generateMockActivityData = (): ActivityData => {
  const data: ActivityData = {};
  const today = new Date();
  
  // Start from January 1st of current year
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  
  // Calculate days from start of year to today
  const daysDiff = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));

  for (let i = 0; i <= daysDiff; i++) {
    const date = new Date(startOfYear);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];

    const random = Math.random();
    if (random > 0.3) {
      data[dateStr] = Math.floor(Math.random() * 8) + 1;
    }
  }

  return data;
};

export default function ProfilePage() {
  const profile = mockUserProfile;
  const stats = mockUserStats;
  const streakData = mockStreakData;
  const progressData = mockProgressData;
  const deadlines = mockDeadlines;
  const [activityData] = useState<ActivityData>(generateMockActivityData());
  const [darkMode, setDarkMode] = useState(false);
  const secondaryTextClass = darkMode ? "text-gray-400" : "text-gray-600";
  const navigate = useNavigate();

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/home", { replace: true });
    // Force reload to ensure clean state
    window.location.href = "/home";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`shadow-md sticky top-0 z-50 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-5xl font-bold text-blue-600">∞</div>
              <span className="text-2xl font-bold text-blue-600">Neura</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
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
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-900" />
                )}
              </button>

              <button
                className={`relative p-2 rounded-full transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                }`}
              >
                <Bell
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-900"}
                />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button
                onClick={handleLogout}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                }`}
              >
                <LogOut
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-900"}
                />
              </button>

              <div
                onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
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

      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <div className="space-y-6">
          {/* Profile Header Section */}
          <div
            className={`rounded-2xl p-6 transition-colors ${
              darkMode
                 ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Badge className="bg-yellow-600 text-white hover:bg-yellow-700 mt-4">
                  <Award className="w-3 h-3 mr-1" />
                  {profile.rank}
                </Badge>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h1
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {profile.name}
                  </h1>
                </div>

                <p
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  @{profile.username}
                </p>

                {profile.bio && (
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {profile.bio}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-16 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      📍
                    </span>
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Cairo, Egypt
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      🔗
                    </span>
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Website
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Github
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  }`}
                />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      GitHub
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  }`}
                />
                    <span
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      Joined January 2024
                    </span>
                  </div>
                 
                </div>

                <div className="flex flex-wrap items-center gap-16 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                     <Users2
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? " text-blue-500 group-hover:text-white"
                      : "text-blue-600 group-hover:text-white"
                  }`}
                />
                    <span
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                       friends
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <SearchCode
                  className={`w-5 h-5 transition-colors ${
                    darkMode
                      ? "text-green-400 group-hover:text-white"
                      : "text-green-600 group-hover:text-white"
                  }`}
                />
                    <span
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                       Languages
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-28 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      415
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      Php, C#, C++, Python, Java
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-20">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Solved
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stats.solved}/{stats.total}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Ranking
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        #{stats.ranking.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Easy
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stats.easy}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Medium
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stats.medium}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Hard
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stats.hard}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <div>
                      <div
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Acceptance
                      </div>
                      <div
                        className={`font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stats.acceptanceRate}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Streak Tracker Section */}
          <div
            className={`rounded-2xl p-6 transition-colors ${
              darkMode
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-orange-500" />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Streak Record
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div
                className={`text-center p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Current Streak
                </div>
                <div
                  className={`text-xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {streakData.currentStreak} days
                </div>
              </div>

              <div
                className={`text-center p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Max Streak
                </div>
                <div
                  className={`text-xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {streakData.maxStreak} days
                </div>
              </div>

              <div
                className={`text-center p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Active Days
                </div>
                <div
                  className={`text-xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {streakData.totalActiveDays} days
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout for Deadlines and Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Deadlines Section */}
            <div
              className={`rounded-2xl p-6 transition-colors ${
                darkMode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-purple-500" />
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Upcoming Deadlines
                </h2>
              </div>

              <div className="space-y-3">
                {deadlines.length === 0 ? (
                  <p
                    className={`text-center py-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No upcoming deadlines
                  </p>
                ) : (
                  deadlines.map((deadline) => (
                    <div
                      key={deadline.id}
                      className={`p-4 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-gray-800 hover:bg-gray-750 border border-gray-700"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {deadline.isUrgent && (
                              <AlertCircle className="w-4 h-4 text-red-500" />
                            )}
                            <h3
                              className={`text-sm font-semibold ${
                                darkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {deadline.title}
                            </h3>
                          </div>
                          <p
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {deadline.contest}
                          </p>
                          <p
                            className={`text-xs mt-1 ${
                              darkMode ? "text-gray-500" : "text-gray-500"
                            }`}
                          >
                            {deadline.date.toLocaleDateString()} at{" "}
                            {deadline.date.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>

                        <Badge
                          className={
                            deadline.isUrgent
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-blue-500 hover:bg-blue-600 text-white"
                          }
                        >
                          {formatTimeRemaining(deadline.date)}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Activity Calendar Section */}
            <div
              className={`rounded-2xl p-6 transition-colors ${
                darkMode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-500" />
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Submission Activity
                </h2>
              </div>

              <div className="overflow-x-auto">
                <ActivityCalendar
                  activityData={activityData}
                  darkMode={darkMode}
                />
                
              </div>
            </div>
          </div>

          {/* Progress Chart Section */}
          <div
            className={`rounded-2xl p-6 transition-colors ${
              darkMode
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Progress Levels
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={progressData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkMode ? "#374151" : "#e5e7eb"}
                />
                <XAxis
                  dataKey="date"
                  className="text-xs"
                  stroke={darkMode ? "#9ca3af" : "#6b7280"}
                />
                <YAxis
                  className="text-xs"
                  stroke={darkMode ? "#9ca3af" : "#6b7280"}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                    border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "6px",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
              <div
                className={`text-center p-2 rounded ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Newbie
                </div>
                <div
                  className={`text-sm font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  0-999
                </div>
              </div>
              <div
                className={`text-center p-2 rounded ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <div
                  className={`text-xs ${
                    darkMode ? "text-green-200" : "text-green-800"
                  }`}
                >
                  Pupil
                </div>
                <div
                  className={`text-sm font-semibold ${
                    darkMode ? "text-green-100" : "text-green-900"
                  }`}
                >
                  1000-1199
                </div>
              </div>
              <div
                className={`text-center p-2 rounded ${
                  darkMode ? "bg-cyan-900" : "bg-cyan-100"
                }`}
              >
                <div
                  className={`text-xs ${
                    darkMode ? "text-cyan-200" : "text-cyan-800"
                  }`}
                >
                  Specialist
                </div>
                <div
                  className={`text-sm font-semibold ${
                    darkMode ? "text-cyan-100" : "text-cyan-900"
                  }`}
                >
                  1200-1399
                </div>
              </div>
              <div
                className={`text-center p-2 rounded ${
                  darkMode ? "bg-blue-900" : "bg-blue-100"
                }`}
              >
                <div
                  className={`text-xs ${
                    darkMode ? "text-blue-200" : "text-blue-800"
                  }`}
                >
                  Expert
                </div>
                <div
                  className={`text-sm font-semibold ${
                    darkMode ? "text-blue-100" : "text-blue-900"
                  }`}
                >
                  1400-1599
                </div>
              </div>
              <div
                className={`text-center p-2 rounded ${
                  darkMode ? "bg-purple-900" : "bg-purple-100"
                }`}
              >
                <div
                  className={`text-xs ${
                    darkMode ? "text-purple-200" : "text-purple-800"
                  }`}
                >
                  Master
                </div>
                <div
                  className={`text-sm font-semibold ${
                    darkMode ? "text-purple-100" : "text-purple-900"
                  }`}
                >
                  1600+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
         <footer
        className={` text-white py-8 mt-16 ${
          darkMode ? "bg-black" : "bg-[E0E0E0]"
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
              <span className="text-sm font-semibold">Fast Links</span>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-gray-500" : "text-black"
                }`}
              >
                Home
              </a>
               <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-gray-500" : "text-black"
                }`}
              >
                Courses
              </a>
               <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-gray-500" : "text-black"
                }`}
              >
                Problems
              </a>
              <a
                href="#"
                className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-gray-500" : "text-black"
                }`}
              >
                Community
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p  className={`text-sm hover:text-white transition-colors ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}>
              © 2025 Cubed Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper function
function formatTimeRemaining(date: Date): string {
  const now = new Date();
  const diff = date.getTime() - now.getTime();

  if (diff <= 0) {
    return "Time passed";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) {
    return `${days}d ${hours}h`;
  }
  return `${hours}h`;
}

// Activity Calendar Component
interface ActivityCalendarProps {
  activityData: ActivityData;
  darkMode: boolean;
}

export function ActivityCalendar({
  activityData,
  darkMode,
}: ActivityCalendarProps) {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  
  // Calculate days from start of year to today
  const daysDiff = Math.floor((endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  
  const calendarData: { date: Date; count: number }[] = [];

  // Generate calendar data from start of year to today
  for (let i = 0; i <= daysDiff; i++) {
    const date = new Date(startOfYear);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];
    calendarData.push({
      date,
      count: activityData[dateStr] || 0,
    });
  }

  const getColorIntensity = (count: number) => {
    if (count === 0) return darkMode ? "bg-gray-800" : "bg-gray-100";
    if (count <= 2) return "bg-green-200";
    if (count <= 4) return "bg-green-400";
    if (count <= 6) return "bg-green-600";
    return "bg-green-800";
  };

  // Group by weeks
  const weeks: { date: Date; count: number }[][] = [];
  let currentWeek: { date: Date; count: number }[] = [];

  calendarData.forEach((day, index) => {
    currentWeek.push(day);
    if (day.date.getDay() === 6 || index === calendarData.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-1 flex-wrap">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`w-4 h-4 rounded-sm ${getColorIntensity(day.count)}`}
                title={`${day.date.toLocaleDateString()}: ${day.count} submissions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-s">
        <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Less</span>
        <div className={`w-3 h-3 rounded-sm ${darkMode ? "bg-gray-800" : "bg-gray-100"}`} />
        <div className="w-3 h-3 rounded-sm bg-green-200" />
        <div className="w-3 h-3 rounded-sm bg-green-400" />
        <div className="w-3 h-3 rounded-sm bg-green-600" />
        <div className="w-3 h-3 rounded-sm bg-green-800" />
        <span className={darkMode ? "text-gray-400" : "text-gray-600"}>More</span>
      </div>
    </div>
  );
}
