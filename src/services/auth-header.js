export default function auth_header() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("bannnaaaa")
    if(user && user.token) {
       return { Authorization: `Bearer ${user.token}`};
    }else{
        return {};
    }
       
}