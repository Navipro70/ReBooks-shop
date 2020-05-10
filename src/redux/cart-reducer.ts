import {InferActionsType} from "./store";

const initialState = {
    email: "",
    address: "",
    phone: "",
    paymentMethod: "alfaBank",
    number: "",
    name: "",
    expiry: "",
    cvc: ""
};

type ActionType = InferActionsType<typeof cartActions>

export const cartReducer = (state: typeof initialState = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_CONTACT_INFORMATION":
            return {
                email: action.email,
                address: action.address,
                phone: action.phone
            };
        default:
            return {
                ...state
            }
    }
};

const cartActions = {
    addContactInformation: (email: string, address: string, phone: number) => ({
        type: 'ADD_CONTACT_INFORMATION',
        email,
        address,
        phone
    } as const)
};
