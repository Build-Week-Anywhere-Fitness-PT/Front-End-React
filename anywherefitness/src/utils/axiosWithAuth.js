import axios from 'axios';
const axiosWithAuth= () =>{
    const token= localStorage.getItem('events','token');
    

    return axios.create({
        headers: {
        Authorization: token,
        },
        
        baseURL: 'https://lambda-anywhere-fitness.herokuapp.com/'
        })
};
export default axiosWithAuth;



//const {events, setEvents} = useContext(localStorage.getItem("events")) ADD THIS