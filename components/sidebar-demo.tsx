"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { courses } from './course';

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
          "flex h-screen w-screen flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "User",
                href: "#",
                icon: null,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex justify-center items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="/transparent-unbuild.png"
        alt="Logo"
        className="h-20 w-20 shrink-0"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="/transparent-unbuild.png"
        alt="Logo"
        className="h-12 w-12 shrink-0"
      />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-12 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
{courses.map((course, idx) => (
  <div
    key={"course-row-" + idx}
    className={cn(
      "h-24 w-full rounded-lg flex items-center justify-between text-neutral-200 px-6 animate-pulse",
      idx % 2 === 0
        ? "bg-gray-700 dark:bg-neutral-900"
        : "bg-gray-800 dark:bg-neutral-800"
    )}
    style={{
      animationDelay: `${idx * 2.5}s`,
      animationDuration: '4.5s',
      animationIterationCount: '1',
      animationTimingFunction: 'ease-in-out',
    }}
  >
    <div className="flex flex-col">
    <div className="text-lg font-semibold">{course.name}</div>
    <div className="text-sm text-neutral-400">{course.description}</div>
    <div className="text-xs text-neutral-500 mt-1 italic">
    Difficulty: {course.difficulty}
    </div>
    </div> 

    <div className="flex gap-1">
      <button className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600 transition cursor-pointer dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900">
        Details
      </button>
      <button className="rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 transition cursor-pointer">
        Launch
      </button>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};
