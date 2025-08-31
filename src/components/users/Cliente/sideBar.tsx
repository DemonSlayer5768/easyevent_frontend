"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useSidebar } from "../../../hooks/useSideBar";
import Link from "next/link";

interface SidebarItemProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
  isExpanded: boolean;
}

const SidebarItem = ({
  href,
  icon: Icon,
  text,
  isExpanded,
}: SidebarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out
          ${isExpanded ? "w-full justify-start" : "w-12 justify-center"}`}
      >
        <Icon size={24} />
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0"
          }`}
        >
          <span className="whitespace-nowrap">{text}</span>
        </div>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { mainRoutes, bottomRoutes, loading } = useSidebar();

  if (loading) return <div className="p-4 text-white">Cargando...</div>;

  return (
    <div className="flex">
      <div
        className={`bg-blue-950 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out
          ${isExpanded ? "w-64 p-5" : "w-14 p-2"}`}
      >
        {/* Toggle Button */}
        <div className="mt-4 pb-6">
          <button
            className="p-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="mt-6 flex-1">
          <ul className="space-y-6">
            {mainRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                href={route.href}
                icon={route.icon}
                text={route.text}
                isExpanded={isExpanded}
              />
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto">
          <hr className="border-gray-700 my-4 mx-2" />
          <ul className="space-y-4">
            {bottomRoutes.map((route, index) => (
              <SidebarItem
                key={index}
                href={route.href}
                icon={route.icon}
                text={route.text}
                isExpanded={isExpanded}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
