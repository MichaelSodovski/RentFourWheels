import { appState } from "./app-state";
import { actionType } from "./action-type";
import { action } from "./action";

export function reducer(currentState: appState, action:action): appState {
    const newState = { ...currentState };

    switch(action.type) {
        case actionType.getAllCars:
            newState.cars = action.payLoad;
            break;
    }
    return newState;
}

