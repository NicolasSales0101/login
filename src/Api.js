const API_BACKEND="http://localhost:3333/user";
import axios from "axios";

const api = {
    register: async (username, password) => {
        try {
            let response = await axios.post(API_BACKEND, {
                username: username,
                password: password
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default api;