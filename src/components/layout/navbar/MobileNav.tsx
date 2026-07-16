"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import navigation from "@/data/navigation";
import Button from "@/components/common/Button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-md transition hover:bg-white/10"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 right-0 top-20 mx-6 rounded-3xl border border-white/10 bg-[#0B1120]/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-5">

            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4">
              <Button href="/resume.pdf">
                Resume
              </Button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}