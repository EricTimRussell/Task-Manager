import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



/**
 * 
 * @param {{name: string, id?: number, listCardId: string,  quantity: number, taskComplete: boolean}} data 
 */
export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.listCardId = data.listCardId
    this.taskComplete = data.taskComplete || false
    this.quantity = 0
    // this.taskTotal = totalTasks on ListCard
  }



  get Template() {
    return `
    <div class="d-flex px-5 gap-4 col-5  text-left">
    <input type="checkbox" onchange="app.tasksController.toggleTaskComplete('${this.id}')" ${this.taskComplete ? 'checked' : ''}>
    <h5 class="selectable" onclick="app.tasksController.toggleTaskComplete('${this.id}')">${this.name}</h5><span class="mdi mdi-delete-forever-outline text-danger fs-4 selectable "
    onclick="app.tasksController.deleteTask('${this.id}')"></span>
    </div>
    `
  }


  get tasks() {
    let tasks = appState.tasks.filter(t => t.listCardId == this.id)
    return tasks
  }

}