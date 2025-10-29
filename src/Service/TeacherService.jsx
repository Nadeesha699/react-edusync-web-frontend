import axios from "axios"
import { appUrl } from "../utils/utils"

export const login = async ({email, password}) =>{
    try{
  const result = await  axios.post(`${appUrl}/teachers/login`,{
    email:email,
    password:password
  })
  return result.data;}
  catch(error){
    throw error
  }
}

export const sendOtp = async ({email}) =>{
    try{
   const result = await axios.post(`${appUrl}/email/send_otp`, {
    receiver_email: email,
    }) 
   return result.data
}
    catch(error){
        throw error
    }
}

export const verifyEmail = async ({email}) =>{
    try {
       const result = await axios.post(`${appUrl}/teachers/verify-email/${email}`)
       return result.data 
    } catch (error) {
       throw error 
    }

}

export const getById = async ({id})=>{
try {
     const result = await axios.get(
      `${appUrl}/teachers/get-by-id/${id}`
    );
    return result.data[0]
} catch (error) {
    throw error
}
}

export const updateById =  async ({id, name, phoneNumber ,email, confirmPassword}) =>{
    try{
const result = await axios
      .put(
        `${appUrl}/teachers/update-by-id/${id}`,
        {
          name: name,
          phone_number: phoneNumber,
          email: email,
          password: confirmPassword,
        }
      )

      return result.data}
      catch(error){
        throw error
      }
}