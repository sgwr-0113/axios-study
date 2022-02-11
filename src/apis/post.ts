import baseAxios from './axios';

class PostApi {
  async getPost<T>(postId: number): Promise<T> {
    const res = await baseAxios.get<T>(`/posts/${postId}`);
    return res.data;
  }

  async getPosts<T>(): Promise<T[]> {
    const res = await baseAxios.get<T[]>('/posts');
    return res.data;
  }
}

export const postApi = new PostApi();
