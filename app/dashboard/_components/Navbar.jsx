"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "components/ui/button";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const navItem = [""];
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const menuBtn = () => {
    setIsOpen(!isOpen);
  };
  const menuClosebtn = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex p-3 items-center justify-between bg-[#e5e5e5] ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/image.svg"}
            alt="logo"
            className="m-0"
            width={40}
            height={40}
          />
          <h1 className="text-red-500 font-bold text-2xl ">AIcruiter</h1>
        </div>
        <ul
          className=" md:flex hidden
        gap-6"
        >
          <li
            className={`${
              path === "/dashboard" && "text-red-600 font-bold "
            } hover:text-red-600 hover:font-bold transition-all  cursor-pointer `}
          >
            Dashboard
          </li>
          <li
            className={`${
              path === "/dashboard/questions" && "text-red-600 font-bold "
            } hover:text-red-600 hover:font-bold transition-all  cursor-pointer `}
          >
            Questions{" "}
          </li>
          <li
            className={`${
              path === "/help" && "text-red-600 font-bold "
            } hover:text-red-600 hover:font-bold transition-all  cursor-pointer `}
          >
            How its works{" "}
          </li>
        </ul>

        {/* nav menu button */}
        <div className="md:hidden">
          <button onClick={menuBtn}>
            {isOpen ? <IoClose /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
        {/* nav menu */}

        <UserButton />
      </div>
      {isOpen && (
        <div className="md:hidden bg-red-500 rounded-sm p-3   m-3 ">
          <span>
            <button onClick={menuClosebtn}>close</button>
          </span>
          <ul>
            <li>A</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

// // <SignedIn>
// //
// //         </SignedIn>

// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" href="#">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
