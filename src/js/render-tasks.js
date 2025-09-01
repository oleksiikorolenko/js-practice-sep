import { form, tasksList} from "./refs";


const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = e.target.taskName.value.trim();
    const descrValue = e.target.taskDescription.value.trim();
    console.log(titleValue, descrValue);
    if (!titleValue || !descrValue) {
        alert('Please write task name and description');
        return;
    }
    form.reset();
    renderTask({title: titleValue, description: descrValue});
};

form.addEventListener('submit', handleSubmit);


function renderTask({title, description}) {
    const markup = `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
  </li>`;
    
    tasksList.innerHTML = markup;
}