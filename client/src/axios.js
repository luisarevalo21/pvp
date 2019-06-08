import axios from "axios";

const instance = axios.create({
  baseURL: "gs://pvp-application.appspot.com/pokemon"
});
export default instance;
