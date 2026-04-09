import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// vedio api
export const videoApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/videos`,reqBody)
}
// api to get all videos
export const Allvedioapi =async()=>{
    return await commonApi("GET",`${serverUrl}/videos`)
}
// To delete a video
export const DeleteVedio =async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/videos/${id}`,{})
}
// Api to add watchhistory
export const addVedioHistoryApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/history`,reqBody)
}
// Get watchhistory
export const GetWatchHistory = async()=>{
    return await commonApi("GET",`${serverUrl}/history`)
}
// Api to delete videoHistory 
export const deleteVideoHistory =async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
}
// api to add category
export const addCategoryApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/category`,reqBody)
}
// api to get the category
export const getCategoryApi =async()=>{
    return await commonApi("GET",`${serverUrl}/category`)
}
// api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/category/${id}`,{})
}