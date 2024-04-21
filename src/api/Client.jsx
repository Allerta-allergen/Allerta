import axios from "axios";

const Client = {

    uploadFile(image){
        return axios.post("api/upload", image)
    },
    uploadImageAndConvertToBase64(image){
        return axios.post("api/images/upload", image)
    },
}

export {Client}