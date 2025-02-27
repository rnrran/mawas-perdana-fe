import CommonDropdown from "./CommonDropdown";
import NavItem from "./NavItem";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";
import Logo from "./Logo";

const Navbar = () => {
  const { headerStyle, headerSize, isNavbarAppointmentBtn } = useHeaderContex();
  const navItemsRaw = [
    {
      name: "Beranda",
      path: "/",
      dropdown: null,
      isNestedDropdown: null,
    },
    {
      name: "Toko",
      path: "/shop",
      dropdown: null,
      isNestedDropdown: null,
    },
    {
      name: "Tentang Kami",
      path: "/about",
      dropdown: null,
      dropdownSection: [
        {
          title: null,
          path: "#",
          dropdownItems: [
            {
              name: "Tentang Kami",

              path: "/about",
            },
            {
              name: "Layanan",

              path: "/services",
            },
            // {
            //   name: "Portfolio",

            //   path: "/portfolio",
            // },
            {
              name: "Tim",

              path: "/team",
            },
            {
              name: "FAQ",

              path: "/faq",
            },
            // {
            //   name: "Google Map Locations",

            //   path: "/locations",
            // },
          ],
        },
      ],
    },
    {
      name: "Kontak",
      path: "/contact",
      dropdown: null,
      isNestedDropdown: null,
    },
  ];
  const navItems = navItemsRaw?.map((navItem, idx) => ({
    ...navItem,
    dropdown: <CommonDropdown items={navItem?.dropdownSection} />
      // idx === 0 ? (
      //   <HomeDropdown itmes={navItem?.dropdownSection} />
      // ) : idx > 0 && idx < 4 ? (
      //   <CommonDropdown items={navItem?.dropdownSection} />
      // ) : idx === 4 ? (
      //   <PagesDropdown itmes={navItem?.dropdownSection} />
      // ) : null,
  }));
  return (
    <div
      className={`col header-menu-column ${
        headerStyle === 2
          ? " menu-color-white"
          : headerStyle === 5
          ? "justify-content-center align-items-center"
          : ""
      }`}
    >
      {headerStyle === 5 ? <Logo sticky={true} /> : ""}
      <div
        className={`header-menu ${
          headerStyle === 5 ? "header-menu-2" : "d-none d-xl-block "
        } `}
      >
        <nav>
          <div className="ltn__main-menu">
            <ul>
              {navItems?.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
