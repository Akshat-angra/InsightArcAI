import React from "react";
import Link from "next/link";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "Contact us",
    url: "/Contact",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: Boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className={`hidden ${isMobile ? "800px:hidden" : "800px:flex"}`}>
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-teal-500 text-blue-500 hover:underline"
                  : "dark:text-white text-black hover:text-teal-500 hover:underline"
              } text-[18px] px-6 font-Josefin font-[500]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className="mt-5">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref>
              <span
                className={`text-[25px] px-5 font-Josefin font-[500] text-black dark:text-white`}
              >
                InsightArcAI
              </span>
            </Link>
            {navItemsData.map((item, index) => (
              <Link href={item.url} passHref key={index}>
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-teal-500 text-crimson hover:underline"
                      : "dark:text-white text-black hover:text-crimson hover:underline"
                  } block py-5 text-[18px] px-6 font-Josefin font-[400]`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
