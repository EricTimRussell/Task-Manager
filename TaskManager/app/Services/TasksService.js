import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js"

class TasksService {
  toggleTaskComplete(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Wrong id')
    }
    task.taskComplete = !task.taskComplete
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }

  createTask(newTask) {
    let task = new Task(newTask)
    appState.tasks = [task, ...appState.tasks]
    saveState('tasks', appState.tasks)
  }


  deleteTask(taskId) {
    let tasks = appState.tasks.filter(t => t.id != taskId)
    appState.tasks = tasks
    saveState('tasks', appState.tasks)
  }


}



export const tasksService = new TasksService