import Main from "@/components/main";
import apiConfig from "@/services/apiconfig";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
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
  return (
    <div>
      <Main data={category} />
    </div>
  );
};

export default page;
