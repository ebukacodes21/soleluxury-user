import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import MainNav from "./main-nav";
import NavbarActions from "./nav-actions";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
       <div className="relative px-4 sm:px-6 lg:-px-8 flex h-16 items-center">
       <Link className="ml-4 flex items-center lg:ml-0" href={"/"}>
          <Image src={"/logo.jpg"} height={10} width={50} alt="logo" />
          <p className="font-bold text-xl">SOLELUXURY</p>
        </Link>
        <MainNav data={[]}/>
        <NavbarActions />
       </div>
      </Container>
    </div>
  );
};

export default Navbar;
