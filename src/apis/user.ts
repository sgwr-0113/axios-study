import baseAxios from './axios';

class UserApi {
  async getUsers<T>(): Promise<T[]> {
    const res = await baseAxios.get<T[]>('/users');
    return res.data;
  }
}

export const userApi = new UserApi();
