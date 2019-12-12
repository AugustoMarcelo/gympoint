export function addRequest(data) {
  return {
    type: '@plan/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function deleteRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}
