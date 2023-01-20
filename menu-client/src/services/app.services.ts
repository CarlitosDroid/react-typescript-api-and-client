import axios from "axios";

export default axios.create({
    baseURL: "https://android-aptitusgo.uc.r.appspot.com/api",
    headers: {
        "Content-type": "application/json",
    },
});
