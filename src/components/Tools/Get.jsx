function Get(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default Get;
