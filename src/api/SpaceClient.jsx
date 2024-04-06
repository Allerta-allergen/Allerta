import axios from "axios";

const spaceClient = {

    getAllStudySpaces(){
        return axios.get("api/studySpace")
    },
    createspace(space){
        return axios.post("api/studySpace", space)
    },
    getStudySpaceById(id) {
        return axios.get(`api/studySpace/${id}`)
    },
}

export {spaceClient}