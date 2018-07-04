import {EventEmitter} from "events";
import dispatcher from "../Dispatcher";
import AppActionTypes from '../ActionTypes';
//import ColorAppActions from "../actions/ColorAppActions";

class ColorAppStore extends EventEmitter {

    constructor() {
        super();
        this.activeColor = "lightgrey";
    }

    handleActions(action) {
        switch (action.type) {
            case AppActionTypes.CHANGE_COLOR: {
                this.activeColor = action.value;
                this.emit("storeUpdated");
                break;
            }
            default: {
            }
        }
    }

    getActiveColor() {
        return this.activeColor;
    }
}

const colorAppStore = new ColorAppStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));
export default colorAppStore;