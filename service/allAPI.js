import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// Upload a video

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVIdeos`,video)
}


// get all video

export const getAlluploadedVideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVIdeos`,"")
}

// get a video

export const getAVideosAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVIdeos/${id}`,"")
}

// delete a video

export const deleteVideosAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVIdeos/${id}`,{})
}

// add history API
export const addHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// get history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// delete  history

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// Add category

export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}
// get category
export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
    }
// delete  category
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// update Category
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}
