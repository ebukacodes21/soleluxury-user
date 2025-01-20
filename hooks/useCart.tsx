import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UseCartProp = {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<UseCartProp>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItem = get().items;
      const exists = currentItem.find((item) => item.id === data.id);
      if (exists) {
        return toast("item already in cart");
      }
      set({ items: [...get().items, data] });
      toast("item added to cart");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast("item removed from cart");
    },
    removeAll: () => {
      set({ items: [] });
    },
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;
