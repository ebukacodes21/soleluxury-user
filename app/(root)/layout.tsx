import apiConfig from "@/services/apiconfig";
import React from "react";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  if (storeData && !storeData.error) {
    redirect(`${storeData.stores[0].id}`);
  }

  return (
    <div>
      {children}
    </div>
  );
}
