import baseAxios from './axios';

class PostApi {
  async getPost<T>(params: { [key: string]: string | number | unknown }, postId?: string | number): Promise<T> {
    const res = await baseAxios.get<T>(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      params,
    });
    return res.data;
  }

  async getPosts<T>(): Promise<T[]> {
    const res = await baseAxios.get<T[]>('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  }
}

export const postApi = new PostApi();
