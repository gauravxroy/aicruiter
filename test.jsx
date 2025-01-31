import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Automation", href: "#" },
  ];

  const handleMenuToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {" "}
      <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  title="Home"
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <h1 className="w-auto h-8 text-xl font-medium">
                    <b className="text-red-500">/D</b>ataboard
                  </h1>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={handleMenuToggle}
                  aria-expanded={expanded}
                >
                  <span
                    className={!expanded ? "" : "hidden"}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                  <span className={expanded ? "" : "hidden"} aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Customer Login
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            {expanded && (
              <nav>
                <div className="px-1 py-8">
                  <div className="grid gap-y-7">
                    {navLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        {link.title}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      Customer Login
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Content Section */}
        <section className="pt-12 pb-24 sm:pt-16">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl xl:text-6xl font-pj">
                Discover and Connect with Amazing Profiles
              </h1>
              <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                Explore our collection of profiles and discover interesting
                people from around the world. Connect, learn, and grow your
                network with our powerful platform.
              </p>
              <div className="mt-8 space-x-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign In
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Featured Section */}
            <div className="mt-16 md:mt-24">
              <div className="flex justify-center gap-6 flex-wrap">
                {["100+", "20+", "10+"].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 text-center bg-white rounded-xl"
                  >
                    <p className="text-3xl font-bold text-gray-900">{stat}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {index === 0 && "Active Members"}
                      {index === 1 && "Contributers"}
                      {index === 2 && "Countries"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;

// <div className="flex  p-4 items-center justify-between bg-white h-20 shadow-md ">
//   <Image src={img} alt="logo" width={50} height={50} />
//   <nav className="flex items-center justify-between gap-4">
//     <Link
//       className={`hover:text-red-700 hover:font-semibold cursor-pointer ${
//         path == "/dashboard" && "text-red-700 font-semibold"
//       }`}
//       href={"/dashboard"}
//     >
//       Dashboard
//     </Link>
//     <Link
//       href={"/dashboard/questions"}
//       className={`hover:text-red-700 hover:font-semibold cursor-pointer ${
//         path == "/dashboard/questions" && "text-red-700 font-semibold"
//       }`}
//     >
//       Questions
//     </Link>
//     <Link
//       href={"/faq"}
//       className={`hover:text-red-700 hover:font-semibold cursor-pointer ${
//         path == "/faq" && "text-red-700 font-semibold"
//       }`}
//     >
//       Faq
//     </Link>
//   </nav>
//   <UserButton />
// </div>
