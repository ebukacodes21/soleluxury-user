import BillBoard from "@/components/billboard";
import Container from "@/components/ui/container";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { storeId: string } }) => {
  const { storeId } = await params;

  let storeData = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getStore,
      params: { id: Number(storeId) },
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

  console.log(storeData.store.categories)

  return (
    <Container>
      <BillBoard data={storeData?.store?.billboards} />
    </Container>
  );
};

export default page;
