import { Disclosure } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-8 lg:px-16">
            <div className="relative flex items-center h-16">
              <div className="absolute inset-y-0 right-0 mx-3 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 text-3xl hover:text-white hover:bg-gray-700 focus:outline-none outline-none">
                  {/* <span className="sr-only">Open main menu</span> */}
                  {open ? (
                    <IoCloseOutline
                      className="block"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiMenuAlt1 className="block" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex lg:items-center lg:items-stretch sm:justify-around md:justify-end">
                <div className="block md:hidden lg:hidden flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block lg:hidden h-12 w-auto rounded-full"
                      src={logo}
                      alt="ElectroInfinity"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex gap-4 md:justify-end">
                    {navigation.map(item => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-club-50 hover:text-club-600 focus:bg-club-50 focus:text-club-600",
                          "px-3 py-1 rounded-md md:text-xl lg:text-lg font-medium"
                        )}
                        exact
                        activeClassName="bg-club-50 text-club-600"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium text-center"
                  )}
                  exact
                  activeClassName="bg-gray-900 text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
