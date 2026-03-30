import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// vedio api
export const videoApi =async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/videos`,reqBody)
}