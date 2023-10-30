"use client";

// ::::: REACT / HOOK :::::
import React from "react";

// ::::: NEXTUI :::::
import {
  Link,
  Navbar,
  Button,
  NavbarItem,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

// ::::: MENU OPCIONES :::::
const links = [
  { id: 1, name: "Membresía", url: "/members" },
  { id: 2, name: "Reservas", url: "/bookings" },
  // { id: 3, name: "Miembros", url: "members" },
  { id: 3, name: "Horarios", url: "/schedules" },
];

// ::::: ICONO :::::
import { CgGym } from "react-icons/cg";
import { BiSolidLogOutCircle } from "react-icons/bi";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Membresía", "Miembros" /* "Reservas", */, "Horarios"];

  return (
    <Navbar
      className="animate__animated animate__fadeInDown bg-[#25252550]"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <Link href="/" className="bg-neutral-900 rounded-full py-1 px-4">
          <div>
            <NavbarBrand className="flex items-center transition-all gap-1">
              <CgGym className="text-violet-700 " size="35px" />
              <p className="font-bold text-violet-700 text text-[1.2rem] hidden md:block">
                FFC
              </p>
            </NavbarBrand>
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {links.map((link) => (
          <Link
            key={link.id}
            className="text-white"
            color="foreground"
            href={link.url}
          >
            {link.name}
          </Link>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/login"
            color={false ? "primary" : "danger"}
            variant="flat"
          >
            <p className="font-bold hidden md:block">
              {false ? "INICIAR SESIÓN" : "CERRAR SESIÓN"}
            </p>
            <BiSolidLogOutCircle size={50} className="block md:hidden" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#25252550]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href="#"
              size="lg"
              color="foreground"
              className="text-white block text-center w-full my-2"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
