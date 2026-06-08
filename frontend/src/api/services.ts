import api from "./axiosInstance";
import type {
  DividedDifferencesRequest,
  DividedDifferencesResponse,
} from "../schemas/interpolation.schema";


export const methodsService = {
  /**
   * Ejecuta el método de Diferencias Divididas
   */
  postDividedDifferences: async (
    data: DividedDifferencesRequest,
  ): Promise<DividedDifferencesResponse> => {
    const response = await api.post<DividedDifferencesResponse>(
      "/interpolation",
      data,
    );
    return response.data;
  },

};
