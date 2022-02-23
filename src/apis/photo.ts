import baseAxios from './axios';

class PhotoApi {
  async getPhotos<T>(): Promise<T[]> {
    const res = await baseAxios.get<T[]>('/photos');
    return res.data;
  }
}

export const photoApi = new PhotoApi();
