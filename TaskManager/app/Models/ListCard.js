import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"






export class ListCard {


  /**
   * 
   * @param {{name: string, id?: number,totalTasks: number, color: string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.totalTasks = 0
  }

  get Template() {
    return `
  <div class="col-md-6 py-3 px-5">
          <div class="card">
            <div class="d-flex justify-content-center border border-dark text-light fs-1" style="background-color: ${this.color}" 
              <h1>${this.name}</h1><span class="mdi mdi-alpha-x fs-2 text-danger selectable " onclick="app.listsController.deleteList('${this.id}')"</span>
            </div>
            <div class="card-body p-3">
            <div> ${this.tasksTemplate} </div>
            <form onsubmit="app.tasksController.createTask('${this.id}')" class="input-group mb-1 mt-5">
            <span class="input-group-text" id="">Task</span>
            <input type="text" class="form-control" name="name" required>
            <button type="submit" class="btn btn-light">Add</button>
            </form>
            </div>
            <div class="d-flex p-3">
            <h5>"TotalTasks"/</h5>
            <h5 class="" >${this.tasks.length} Tasks ToDo</h5>
          </div>
          </div>
        </div>
  `
    // TODO add hover delete info on list delete button
  }

  get tasksTemplate() {
    let template = ''
    this.tasks.forEach(t => template += t.Template)
    return template
  }

  get tasks() {
    let tasks = appState.tasks.filter(t => t.listCardId == this.id)
    return tasks
  }





}
