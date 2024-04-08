import axios from "axios";

const Client = {

    getAllStudySpaces(){
        return axios.get("api/upload")
    },
    uploadFile(image){
        return axios.post("api/upload", image)
    },
    uploadImageAndConvertToBase64(image){
        return axios.post("api/images/upload", image)
    },
}

export {Client}