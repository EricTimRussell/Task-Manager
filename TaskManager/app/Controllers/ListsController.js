import { appState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";




function _drawList() {
  let template = ''
  appState.lists.forEach(l => template += l.Template)
  setHTML('lists', template)
}




export class ListsController {
  constructor() {
    console.log('ListsController');
    _drawList()
    appState.on('lists', _drawList)
    appState.on('tasks', _drawList)
  }


  createList() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newList = getFormData(form)
      listsService.createList(newList)
      console.log(appState.lists);
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error);
    }
  }
  deleteList(listCardId) {
    if (window.confirm('Remove Entire List?'))
      listsService.deleteList(listCardId)
  }

}