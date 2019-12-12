export function addRequest(data) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function deleteRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}
