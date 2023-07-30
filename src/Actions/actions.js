import { ADD_TASK } from "../Constants/actions-types.js";

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}