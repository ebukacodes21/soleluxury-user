import { Product } from '@/types';
import { create } from 'zustand';

type UsePreviewProp = {
    isOpen: boolean;
    data: Product | undefined;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreview = create<UsePreviewProp>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreview
