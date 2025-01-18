import React from "react";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import CateList from "./cate-list";

const CateNav = async ({ params }: { params: { storeId: string } }) => {
  const { storeId } = await params;
  let storeData = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getStore,
      params: { id: storeId },
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
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6 mt-2">
      {storeData.store && <CateList data={storeData.store.categories} />}
    </div>
  );
};

export default CateNav;
