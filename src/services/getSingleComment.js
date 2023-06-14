import http from "./httpService";
export function getSingleComment(id, set) {
  return http
    .get(`/comments/${id}`)
    .then((res) => set(res.data))
    .catch();
}
