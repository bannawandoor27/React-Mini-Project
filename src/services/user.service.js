import axios from "axios";
import auth_header from "./auth-header";

const API_URL = "http://localhost:8000/api/";

const getPublicContent = () => axios.get(API_URL+'all');

const getUserBoard = () => axios.get(API_URL+'profile/',{headers: auth_header()});

const getAdminBoard = () => axios.get(API_URL+'admin/',{headers: auth_header()});

export default {
        getPublicContent,
        getAdminBoard,
        getUserBoard
}