import React, { useState, useEffect, useRef } from "react";
// import Home from "./Home";
import myImage from "../images/khan.png"; // Adjust the path as necessary
import {
  Home as HomeIcon,
  Info,
  MessageSquare,
  LayoutDashboard,
  Settings,
  LogOut,
  User,
} from "lucide-react";

const NavItem = ({ icon, text, sectionId, activeSection, onClick }) => (
  <button
    className={`flex items-center px-4 py-3 w-full text-left rounded-lg transition-colors duration-200 ${
      activeSection === sectionId
        ? "bg-purple-700 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-purple-300"
    }`}
    onClick={() => onClick(sectionId)}
  >
    {icon}
    <span className="ml-3">{text}</span>
  </button>
);

// Main Home Component
function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState("$5,200.00");
  const [yearlyIncome, setYearlyIncome] = useState("$62,400.00");

  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showContent = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    const income = selectedMonth
      ? (Math.random() * 5000 + 2000).toFixed(2)
      : "0.00";
    setMonthlyIncome(`$${income}`);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    const income = year ? (Math.random() * 60000 + 20000).toFixed(2) : "0.00";
    setYearlyIncome(`$${income}`);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-gray-900 to-black text-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-70 backdrop-blur-md p-4 flex justify-between items-center rounded-b-lg shadow-md h-16">
        <div className="text-xl font-bold text-purple-300">
          <img src={myImage} alt="" className="h-30" />
        </div>
        <button
          onClick={toggleSidebar}
          className="text-purple-300 p-2 rounded-full hover:bg-purple-800 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Main Layout */}
      <div className=" flex flex-1 md:flex-row pt-16 md:pt-0">
        {/* Sidebar */}
        <aside
          className={`fixed z-40 top-0 left-0 w-[70%] sm:w-[60%] md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 p-6 flex-col justify-between h-screen transition-all duration-300 ease-in-out transform ${
            isSidebarOpen
              ? "translate-x-0 flex"
              : "-translate-x-full hidden md:flex"
          } md:translate-x-0 md:flex rounded-r-xl md:rounded-r-none shadow-lg md:shadow-none`}
        >
          <div>
            <div className="text-center mb-10 mt-4">
              <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-4xl font-bold">
                <User size={48} />
              </div>
              <div className="text-lg font-medium text-gray-200">User Name</div>
              <div className="text-sm text-gray-400">user@example.com</div>
            </div>
            <nav className="space-y-2">
              <NavItem
                icon={<HomeIcon size={20} />}
                text="Home"
                sectionId="home"
                activeSection={activeSection}
                onClick={showContent}
              />
              <NavItem
                icon={<Info size={20} />}
                text="About"
                sectionId="about"
                activeSection={activeSection}
                onClick={showContent}
              />
              <NavItem
                icon={<MessageSquare size={20} />}
                text="Chat"
                sectionId="chat"
                activeSection={activeSection}
                onClick={showContent}
              />
              <NavItem
                icon={<LayoutDashboard size={20} />}
                text="Dashboard"
                sectionId="dashboard"
                activeSection={activeSection}
                onClick={showContent}
              />
            </nav>
          </div>
          <div className="text-sm text-gray-400 mt-6">
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-purple-300 transition-colors"
            >
              <Settings size={18} className="mr-2" /> Settings
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:ml-64 ">
          {/* Desktop Header */}
          <header className="hidden md:flex fixed top-0 right-0 left-64 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-70 backdrop-blur-md p-4 shadow-md justify-between items-center rounded-bl-xl h-20">
            <div className="text-xl font-bold text-purple-300 w-[80%] ">
              <img src={myImage} alt="" className="h-40 " />
            </div>
            <div className="relative">
              <button
                ref={profileButtonRef}
                onClick={toggleProfileMenu}
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white ring-2 ring-purple-400 ring-offset-2 hover:ring-offset-0 transition-all"
              >
                <User size={24} />
              </button>
              {isProfileMenuOpen && (
                <div
                  ref={profileMenuRef}
                  className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-xl border border-gray-700 text-sm overflow-hidden z-50 animate-fade-in"
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-700 text-gray-200 transition-colors"
                  >
                    <User size={16} className="mr-2" /> Edit Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-gray-700 text-gray-200 transition-colors"
                  >
                    <LogOut size={16} className="mr-2" /> Log Out
                  </a>
                </div>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pt-20 lg:mt-20 sm:mt-5">
            {activeSection === "home" && (
              <section className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-100">
                  Welcome to Content Hub
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Select a menu item to get started and explore the features.
                </p>
              </section>
            )}

            {activeSection === "about" && (
              <section className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-100 mb-4">
                  About Content Hub
                </h2>
                <p className="text-lg text-gray-300">
                  Content Hub is a dashboard platform to manage content,
                  visualize data, and explore digital assets.
                </p>
              </section>
            )}

            {activeSection === "chat" && (
              <section className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-100 mb-4">Chat</h2>
                <p className="text-lg text-gray-300">
                  Chat feature is coming soon! Stay tuned 🚀
                </p>
              </section>
            )}

            {activeSection === "dashboard" && (
              <section className="space-y-6 animate-fade-in ">
                <h2 className="text-3xl font-bold  bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  Khan Bari Development Fund
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-sm text-gray-400 font-medium">
                      Account Balance
                    </h3>
                    <p className="text-3xl font-bold text-green-400 mt-2">
                      $12,450.00
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-sm text-gray-400 font-medium">
                      Total Transactions
                    </h3>
                    <p className="text-3xl font-bold text-blue-400 mt-2">
                      $78,300.00
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-sm text-gray-400 font-medium">
                      Monthly Income
                    </h3>
                    <input
                      type="month"
                      className="mt-3 w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-purple-500"
                      onChange={handleMonthChange}
                    />
                    <p className="text-3xl font-bold text-purple-400 mt-3">
                      {monthlyIncome}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-sm text-gray-400 font-medium">
                      Yearly Income
                    </h3>
                    <input
                      type="number"
                      className="mt-3 w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-purple-500"
                      placeholder="2025"
                      onChange={handleYearChange}
                    />
                    <p className="text-3xl font-bold text-indigo-400 mt-3">
                      {yearlyIncome}
                    </p>
                  </div>
                </div>
                {/* Investor List Table */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 ">
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Investor List
                  </h3>
                  <table className="min-w-full text-left border-collapse">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-300 uppercase tracking-wider rounded-tl-lg">
                          Name
                        </th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          Mobile
                        </th>
                        <th className="py-3 px-4 text-sm font-semibold text-gray-300 uppercase tracking-wider text-right">
                          Amount Invested
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-150">
                        <td className="py-3 px-4 text-gray-200">
                          Alice Johnson
                        </td>
                        <td className="py-3 px-4 text-gray-400">
                          alice@example.com
                        </td>
                        <td className="py-3 px-4 text-gray-200 text-right">
                          $10,000
                        </td>
                      </tr>
                      <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-150">
                        <td className="py-3 px-4 text-gray-200">Bob Smith</td>
                        <td className="py-3 px-4 text-gray-400">
                          bob@example.com
                        </td>
                        <td className="py-3 px-4 text-gray-200 text-right">
                          $8,000
                        </td>
                      </tr>
                      <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-150">
                        <td className="py-3 px-4 text-gray-200">Carol Davis</td>
                        <td className="py-3 px-4 text-gray-400">
                          carol@example.com
                        </td>
                        <td className="py-3 px-4 text-gray-200 text-right">
                          $5,000
                        </td>
                      </tr>
                      <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-150">
                        <td className="py-3 px-4 text-gray-200">David Lee</td>
                        <td className="py-3 px-4 text-gray-400">
                          david@example.com
                        </td>
                        <td className="py-3 px-4 text-gray-200 text-right">
                          $15,000
                        </td>
                      </tr>
                      <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors duration-150">
                        <td className="py-3 px-4 text-gray-200">Eva Green</td>
                        <td className="py-3 px-4 text-gray-400">
                          eva@example.com
                        </td>
                        <td className="py-3 px-4 text-gray-200 text-right">
                          $7,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
