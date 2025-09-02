import { form, tasksList} from "./refs";
import renderTask from "./tasks";
import { saveTaskToLocalStorage, deleteTaskFromLocalStorage, renderTaskFromLocalStorage } from "./local-storage-api";
import { initTheme } from "./theme-switcher";


initTheme();
renderTaskFromLocalStorage();

const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = e.target.taskName.value.trim();
    const descrValue = e.target.taskDescription.value.trim();
    console.log(titleValue, descrValue);
    if (!titleValue || !descrValue) {
        alert('Please write task name and description');
        return;
    }
    
    renderTask({ title: titleValue, description: descrValue });
    saveTaskToLocalStorage({ title: titleValue, description: descrValue });
    form.reset();
};

form.addEventListener('submit', handleSubmit);

tasksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-list-item-btn')) {
        const taskItem = e.target.closest('.task-list-item');
        const indexEl = [...tasksList.children].indexOf(taskItem);
        deleteTaskFromLocalStorage(indexEl);
        taskItem.remove();
    }
});

