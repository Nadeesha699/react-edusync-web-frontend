import { toast } from "react-toastify";
import { appUrl } from "../utils/utils";
import axios from "axios";

export async function save({ index, name, marks }) {
  try{
 const result = await axios
    .post(`${appUrl}/studentmarks/save`, {
      student_index: index,
      student_name: name,
      marks: marks,
    })

    return result.data}
    catch(error){
      throw error
    }
}

export  const  updateById = async ({id,index,name,marks}) =>{
  try {
  const result = await axios
      .put(
        `${appUrl}/studentmarks/update-by-id/${id}`,
        {
          student_index: index,
          student_name: name,
          marks: marks,
        }
      )
      return result.data
  } catch (error) {
    throw error
  }
}

export async function getAll() {
  const result = await axios.get(`${appUrl}/studentmarks/get-all`);
  return result.data;
}

export async function getById({id}) {
    const result = await axios.get(
        `${appUrl}/studentmarks/get-by-id/${id}`
      );
  return result.data[0];
}

export async function deleteById({ id }) {
  await axios.delete(`${appUrl}/studentmarks/delete-by-id/${id}`);
}
