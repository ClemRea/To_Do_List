import Store from "./Tools/Store.jsx";
import Get from "./Tools/Get.jsx";
import Has from "./Tools/Has.jsx";

function Add(inputValue) {
  // verifier s'il y a des produit dans le LS
  if (!Has("Todo")) {
    const todo = [];
    const tache = inputValue;
    todo.push(tache);
    Store("Todo", todo);
  } else {
    const tache = inputValue;
    let taches = Get("Todo");
    taches.push(tache);
    Store("Todo", taches);
  }
}

export default Add;
