import axios from "axios";
import { appUrl } from "../utils/utils";

export const login = async ({ email, password }) => {
  try {
    const result = await axios.post(`${appUrl}/teachers/login`, {
      email: email,
      password: password,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const sendOtp = async ({ email }) => {
  try {
    const result = await axios.post(`${appUrl}/teachers/send-otp`, {
      receiver_email: email,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const verifyEmail = async ({ email }) => {
  try {
    const result = await axios.post(`${appUrl}/teachers/verify-email/${email}`);
    return result.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export const getById = async ({ id }) => {
  try {
    const result = await axios.get(`${appUrl}/teachers/get-by-id/${id}`);
    return result.data[0];
  } catch (error) {
    throw error;
  }
};

export const updateById = async ({
  id,
  name,
  phoneNumber,
  email,
  confirmPassword,
}) => {
  try {
    await axios.put(`${appUrl}/teachers/update-by-id/${id}`, {
      name: name,
      phone_number: phoneNumber,
      email: email,
      password: confirmPassword,
    });
  } catch (error) {
    throw error;
  }
};

export const decodeToken = async () => {
  const result = await axios.get(`${appUrl}/teachers/decode`, {
    headers: { Authorization: sessionStorage.getItem("token") },
  });
  console.log(result.data.user_id);
  return result.data.user_id;
};

export const verifyOtp = async ({ otp, email }) => {
  try {
    const result = await axios.post(`${appUrl}/teachers/verify-otp`, {
      otp: otp,
      email: email,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};
