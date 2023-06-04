
export const initialState = {
    name: "omkar",
    age: 23
}

export type Maction = {
    type: "Change_name",
    paylod: string
} | {
    type: "Change_age",
    paylod: number
}

function Reducer(state: typeof initialState, action: Maction) {

    switch (action.type) {
        case "Change_name":
            return {
                ...state,
                name: action.paylod
            }
        case "Change_age":
            return {
                ...state,
                age: action.paylod
            }
        default:
            return state
    }

}
export default Reducer