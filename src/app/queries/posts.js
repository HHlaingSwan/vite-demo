import api from '@/api/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const usePosts = () =>
    useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await api.get('/posts');
            return res.data;
        },
        staleTime: 60 * 1000, // 1 minute
    });

// const { data, isLoading } = usePosts(); // for usage


export const useCreatePost = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (newPost) => api.post('/posts', newPost),
        onSuccess: () => {
            qc.invalidateQueries(['posts']);  // refresh post list
        },
    });
};

// const createPost = useCreatePost();

// createPost.mutate({ title: "Hello", body: "World" });  // create new post usage


