import axios from "axios";
import config from "@/shared/config";

const guardianApi = axios.create({
    baseURL: config.baseURL,
    params: {
      'api-key': config.API_KEY,
      'lang': 'en' 
    }
  });

  export default guardianApi;
