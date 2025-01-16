import React from "react";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import BillBoard from "@/components/billboard";
import Container from "@/components/ui/container";

const page = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  const { storeId } = await params;
  if (!storeId || storeId === typeof undefined) {
    console.error("Store ID is missing!");
    return null;
  }

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
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={storeData} />
      </div>
    </Container>
  );
};

export default page;
