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