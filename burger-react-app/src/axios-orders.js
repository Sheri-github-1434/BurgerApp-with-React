import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-app-b63a0-default-rtdb.firebaseio.com/"
})

export default instance;