"use client";

import navigation from "@/data/navigation";
import Button from "@/components/common/Button";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Resume Button */}
      <Button
        href="/resume.pdf"
        variant="primary"
      >
        Resume
      </Button>
    </div>
  );
}