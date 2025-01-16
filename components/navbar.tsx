import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import MainNav from "./main-nav";
import NavbarActions from "./nav-actions";
import axios from "axios";
import apiConfig from "@/services/apiconfig";

const Navbar = async () => {
  let storeData = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getStores,
    });

    storeData = res.data;
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      storeData = { error: "Failed to connect to the server." };
    } else if (error.response) {
      storeData = { error: error.response.data };
    } else {
      storeData = { error: "Unknown error occurred." };
    }
  }
  
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:-px-8 flex h-16 items-center">
          <Link className="ml-4 flex items-center lg:ml-0" href={"/"}>
            <Image src={"/logo.jpg"} height={10} width={50} alt="logo" />
            <p className="font-bold text-xl">SOLELUXURY</p>
          </Link>
          <MainNav data={storeData?.stores} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
