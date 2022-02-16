import axios from 'axios';

const API_URL = '/api/user/'

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL, userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

const authService = {
    register
}
export default authService
