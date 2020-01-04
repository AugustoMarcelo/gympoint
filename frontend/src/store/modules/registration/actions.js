export function addRequest(data) {
  return {
    type: '@registration/ADD_REQUEST',
    payload: { data },
  };
}

export function updateRequest(data, id) {
  return {
    type: '@registration/UPDATE_REQUEST',
    payload: { data, id },
  };
}
