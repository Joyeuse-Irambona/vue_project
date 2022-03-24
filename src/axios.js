import axios from "axios";
export default axios.create({
  baseURL: "http://product-mgt-api.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});