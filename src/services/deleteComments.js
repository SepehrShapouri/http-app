import http from "./httpService";
export function deleteComments(id) {
  return http.delete(`/comments/${id}`);
}
