import axios from "axios";



export const axiosWithAuth =()=> {
    
    const token = localStorage.getItem('token');

    console.log("itworked")
    return axios.create({baseURL: 'http://localhost:9000', headers:{authorization: token}})
    
    

}