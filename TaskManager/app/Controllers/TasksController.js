import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class TasksController {
  constructor() {
    console.log('TasksController');
  }



  createTask(listCardId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newTask = getFormData(form)
      // @ts-ignore
      newTask.listCardId = listCardId
      // console.log(newTask);
      tasksService.createTask(newTask)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error);
    }
  }


  deleteTask(taskId) {
    // console.log(taskId, 'hello');
    try {
      if (window.confirm('Remove Task?'))
        tasksService.deleteTask(taskId)
    } catch (error) {
      console.log(error);
    }
  }

  toggleTaskComplete(id) {
    tasksService.toggleTaskComplete(id)
  }

}