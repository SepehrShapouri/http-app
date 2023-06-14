import http from "./httpService";
export function postComments(data){
    return http.post("/comments",data)
}