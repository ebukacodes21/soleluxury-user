import React from "react";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import CateNav from "@/components/cate-nav";

const page = async ({
  params,
}: {
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
        <CateNav params={{ storeId }}/>
        <ProductList title="Featured Products" data={storeData.store.products} />
      </div>
    </Container>
  );
};

export default page;
