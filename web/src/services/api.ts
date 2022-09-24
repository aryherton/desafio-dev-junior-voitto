import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: `http://localhost:3333`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const loginGetToken = async (endPoint: string, body: IUser): Promise<string> => {
  try {
    const user = await api.post(endPoint, body)
      .then((response) => response.data);

    return user;
  } catch (error) {
    return error.response.status;
  }
}

export const registerUser = async (endPoint: string, body: IUser): Promise<string> => {
  try {
    const data = await api.post(endPoint, body)
      .then((resp) => resp.data);
    
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserByToken = async (endPoint: string, token: string): Promise<string> => {
  try {
    api.defaults.headers.common['Authorization'] = token;
    const user = await api.get(endPoint)
      .then((response) => response.data);

    return user;
  } catch (error) {
    return error;
  }
}

export const getAlunos = async (endPoint: string, token: string) => {
  try {
    api.defaults.headers.common['Authorization'] = token;
    const data = await api.get(endPoint)
      .then((resp) => resp.data);

    return data;
  } catch (error) {
      return error.response.status;
  }
}

export const deleteAluno = async (endPoint: string, token: string) => {
  try {
    api.defaults.headers.common['Authorization'] = token;
    await api.delete(endPoint);
  } catch (error) {
    return error.response.status;
  }
}

export default api


// import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'http://localhost:3333/'
// });

// export default api;
