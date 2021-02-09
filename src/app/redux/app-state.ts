import { userModel } from '../models/user.model';

export class appState {
    public user: userModel = null as any;
    
    public constructor() {
        this.user = JSON.parse(sessionStorage.getItem("user")!);
    }
}

export const defaultAppState = new appState();