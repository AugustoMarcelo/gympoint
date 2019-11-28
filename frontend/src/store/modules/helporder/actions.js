export function updateRequest(data) {
  return {
    type: '@helporder/UPDATE_REQUEST',
    payload: { data },
  };
}
