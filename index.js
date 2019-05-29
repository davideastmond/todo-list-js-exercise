// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  }
  return task;
}


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  task.complete = true;
}


// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do laundry", "dirty clothes");
const allTasks = [task1, task2];

console.log(allTasks);
/*
logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed */
