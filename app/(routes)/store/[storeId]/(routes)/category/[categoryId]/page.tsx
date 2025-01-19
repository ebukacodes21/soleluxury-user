import CategoryComponent from "@/components/category";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { storeId: string, categoryId: string } }) => {
  const { categoryId, storeId } = await params;
  let category = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getCategory,
      params: { id: categoryId },
    });

    category = res.data;
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      category = { error: "Failed to connect to the server." };
    } else if (error.response) {
      category = { error: error.response.data };
    } else {
      category = { error: "Unknown error occurred." };
    }
  }

  let store = null;

  try {
    const res = await axios({
      method: "GET",
      url: apiConfig.getStore,
      params: { id: storeId },
    });

    store = res.data;
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      store = { error: "Failed to connect to the server." };
    } else if (error.response) {
      store = { error: error.response.data };
    } else {
      store = { error: "Unknown error occurred." };
    }
  }
  
  return (
    <div>
      <CategoryComponent data={{ store: store.store, category: category.category }} />
    </div>
  );
};

export default page;
