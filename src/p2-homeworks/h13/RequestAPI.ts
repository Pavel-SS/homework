import axios from "axios";


const requestAPI = {
  post(success:boolean){
      return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success}).then(res=> res.data.errorText).catch(error=>error.response ? error.response.data.errorText : error.message)
  }
}


export default requestAPI;