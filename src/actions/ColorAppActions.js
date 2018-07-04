import AppActionTypes from './ActionTypes';
import AppDispatcher from "../Dispatcher";

const ColorAppActions = {
	function changeColor(colorName) {
		AppDispatcher.dispatch({
			type: AppActionTypes.CHANGE_COLOR,
        	value: colorName
		})
	}
}

export default ColorAppActions;
