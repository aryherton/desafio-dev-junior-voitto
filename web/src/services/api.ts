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

// export const setTasks = async (endPoint: string, body: ITasks, token: string) => {
//   try {
//     api.defaults.headers.common['Authorization'] = token;
//     const data = await api.post(endPoint, body);

//     return data;
//   } catch (error) {
//     return error.response.status;
//   }
// }

// export const getDatas = async (endPoint: string, token: string): Promise<IUser> => {
//   try {
//     api.defaults.headers.common['Authorization'] = token;
//     const cartProduct = await api.get(endPoint)
//       .then((resp) => resp.data);

//     return cartProduct;
//   } catch (error) {
//     return error.response.status;
//   }
// }

// export const getSortByDate = async (endPoint: string, body: IBodyByDate, token: string) => {
//   const config: AxiosRequestConfig = {
//     headers: {
//       'Authorization': token,
//       'Content-Type': 'application/json',
//     },
//     data: body,
//   };
//   try {
//     const data = await api.post(endPoint, config)
//       .then((resp) => resp.data);

//     return data;
//   } catch (error) {
//       return error.response.status;
//   }
// }

// export const putUpdateTask = async (endPoint: string, body: ITasks, token: string) => {
//   try {
//     api.defaults.headers.common['Authorization'] = token;
//     const data = await api.put(endPoint, body)
//       .then((resp) => resp.data);

//     return data;
//   } catch (error) {
//       return error.response.status;
//   }

// }

// export const delteTasks = async (endPoint: string, body: IArrIdDelete, token: string) => {
//   const config: AxiosRequestConfig = {
//     headers: {
//         'Authorization': token,
//         'Content-Type': 'application/json',
//     },
//     data: body,
//   }
//   try {
//     await api.delete(endPoint, config);
//   } catch (error) {
//     return error.response.status;
//   }
// }

export default api


// import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'http://localhost:3333/'
// });

// export default api;
