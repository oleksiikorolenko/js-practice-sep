import { tasksList } from "./refs";

export function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


export function deleteTaskFromLocalStorage(indexEl) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filterEl = tasks.filter((task, index) => index !== indexEl);
    localStorage.setItem("tasks", JSON.stringify(filterEl));
};


export function renderTaskFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const markup = tasks.map(({title, description})=> `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
  </li>`).join("");
    
    tasksList.insertAdjacentHTML('beforeend', markup);
};



export function saveThemeToLocalStorage(theme, value) {
    localStorage.setItem(theme, JSON.stringify(value));
};
   
export function loadThemeFromLocalStorage(theme, defaultValue = null) {
    const data = localStorage.getItem(theme);
    return data ? JSON.parse(data) : defaultValue;
}

