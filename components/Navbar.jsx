import Link from "next/link";
import React from "react";

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Product",
    url: "/Product",
  },
  {
    id: 3,
    title: "Cart",
    url: "/Cart",
  },
];
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-16 h-[60px]">
      <Link href="/">Mittikalakar</Link>
      <div>
        {navLinks.map((links) => (
          <Link key={links.id} href={links.url}>
            {links.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
