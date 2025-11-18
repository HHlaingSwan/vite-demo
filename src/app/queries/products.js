import api from "@/api/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await api.get("/products");
            return res.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
// const { data, isLoading, error } = useProducts(); // for usage


export function useCreateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (product) => {
            const res = await api.post("/products", product);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]); // refetch
        },
    });
}

// const createProduct = useCreateProduct(); // for usage POST,PUT,DELETE

// createProduct.mutate({ name: "Book", price: 20 });


