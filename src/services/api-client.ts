import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '8ed7838a1ca64dfd86390f3ad841b21a'
    }
})