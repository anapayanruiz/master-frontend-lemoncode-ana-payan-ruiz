/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export abstract class ApiService {
  protected get(request): Promise<AxiosResponse<any>> {
    const url = request.endpoint.toString();

    const config: Record<string, unknown> = {
      params: request.data
    };
    return axios.get(url, config);
  }
}
