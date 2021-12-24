import axios from 'axios';

class API {
    async signUp(creds) {
        try {
            const newUser = await axios.post('/api/user', creds);
            console.log(newUser.data[0]);
            console.log(newUser.status);
            return newUser.status
        } catch (err) {
            if (err) throw err
        }
    }
    async checkAuth() {
        try {
            const auth = await axios.get('/api/auth/check');
            return auth.auth
        } catch (err) {
            if (err) throw err
        }
    }
    async logIn(cred, state) {
        try {
            const logIn = await axios.post('/api/auth/login', cred)
            if (logIn.status === 200) {
                return true
            } else {
                return false
            }
        } catch (err) {
            if (err) throw err;
            return false
        }
    }
    logOut() {

    }
}
const api = new API()
export default api