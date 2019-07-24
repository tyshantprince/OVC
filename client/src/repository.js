import axios from 'axios'

// export function getUserReports(){
//     return axios.get(`${Base_URL}/api/UserReports`)
//                 .then(Response = Response.data);

// }

export function updateUserReport(data, id) {
    return axios.post(`${BASE_URL}/api/UserReport/update/${id}`, { data })
            .then(response => {
                    return response.data
            })
            .catch(err => Promise.reject(err.message));
}