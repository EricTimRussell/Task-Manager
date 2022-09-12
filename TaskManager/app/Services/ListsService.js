import { appState } from "../AppState.js";
import { ListCard } from "../Models/ListCard.js"
import { saveState } from "../Utils/Store.js";




class ListsService {

  deleteList(listCardId) {
    let listCard = appState.lists.filter(l => l.id != listCardId)
    appState.lists = listCard
    saveState('lists', appState.lists)
  }
  createList(newList) {
    let listCard = new ListCard(newList)
    appState.lists = [listCard, ...appState.lists]
    saveState('lists', appState.lists)
    console.log(appState.lists);
  }

}



export const listsService = new ListsService