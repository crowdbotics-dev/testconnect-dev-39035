import axios from "axios"
import { QWERTYSDF_USERNAME, QWERTYSDF_PASSWORD } from "react-native-dotenv"
const qwertysdf = axios.create({
  baseURL: "http://cbtcms.herokuapp.com",
  auth: { username: QWERTYSDF_USERNAME, password: QWERTYSDF_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
