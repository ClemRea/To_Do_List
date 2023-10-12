function Store(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default Store;
