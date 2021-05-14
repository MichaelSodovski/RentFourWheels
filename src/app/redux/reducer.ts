import { appState, defaultAppState } from "./app-state";
import { actionType } from "./action-type";
import { action } from "./action";

export function reducer(currentState: appState = defaultAppState, action: action): appState {

    const newState = { ...currentState };

    switch (action.type) {
        case actionType.Register:
        case actionType.login: 
        newState.user = action.payLoad;
        sessionStorage.setItem("user", JSON.stringify(newState.user)); 
            break;
        case actionType.LogOut: newState.user = null as any;
            sessionStorage.removeItem("user");
            break;
    }
    return newState;
}

