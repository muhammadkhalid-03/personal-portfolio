"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  mobile?: boolean;
}

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/Resume.pdf", external: true },
  { name: "Contact", href: "/contact" },
];

const MenuLink = ({ mobile = false }: MenuLinkProps) => {
  const pathname = usePathname();
  const containerClass = mobile
    ? "flex flex-col gap-1"
    : "flex items-center gap-7 lg:gap-9";

  const linkClass = (isActive: boolean) =>
    mobile
      ? `rounded-lg px-4 py-3 text-sm transition-colors ${
          isActive
            ? "bg-emerald-300 text-[#071413]"
            : "text-slate-200 hover:bg-white/10 hover:text-white"
        }`
      : `relative py-2 text-sm transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-emerald-300 after:transition-transform ${
          isActive
            ? "text-white after:scale-x-100"
            : "text-slate-300 after:scale-x-0 hover:text-white hover:after:scale-x-100"
        }`;

  return (
    <div className={containerClass}>
      {links.map((item) => {
        const isActive = !item.external && pathname === item.href;

        if (item.external) {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass(false)}
            >
              {item.name}
            </a>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={linkClass(isActive)}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuLink;
