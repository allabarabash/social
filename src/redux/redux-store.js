import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: profileReducer, // each reducer is responsible for it's tree in the app
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})
const store = createStore(reducers)

export default store