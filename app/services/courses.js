import http from "./"

export const fetchCourses = async () => {
    try {
        const {data : {data}} = await http.get(`${http.url}/courses`);
        return data
        
    } catch (error) {
        console.log(error)
    }
    
}