import { appUrl } from "../utils/utils";
import axios from "axios";

export async function save({ index, name, marks, batch }) {
  try {
    const result = await axios.post(
      `${appUrl}/studentmarks/save`,
      {
        student_index: index,
        student_name: name,
        marks: marks,
        batch: batch,
      },
      {
        headers: { Authorization: sessionStorage.getItem("token") },
      }
    );

    return result.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export const updateById = async ({ id, index, name, marks, batch }) => {
  try {
    const result = await axios.put(
      `${appUrl}/studentmarks/update-by-id/${id}`,
      {
        student_index: index,
        student_name: name,
        marks: marks,
        batch: batch,
      },
      {
        headers: { Authorization: sessionStorage.getItem("token") },
      }
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export async function getAll() {
  try {
    const result = await axios.get(`${appUrl}/studentmarks/get-all`, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function getById({ id }) {
  try {
    const result = await axios.get(`${appUrl}/studentmarks/get-by-id/${id}`, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
    return result.data[0];
  } catch (error) {
    throw error;
  }
}

export async function getByIndex({ index }) {
  try {
    const result = await axios.get(
      `${appUrl}/studentmarks/get-by-index/${index}`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteById({ id }) {
  try {
    await axios.delete(`${appUrl}/studentmarks/delete-by-id/${id}`, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
  } catch (error) {
    throw error;
  }
}
