import {InferActionsType} from "./store";

export const initialState = {
    email: "",
    address: "",
    phone: "+375",
    paymentMethod: "alfaBank",
    number: "",
    name: "",
    expiry: "",
    cvc: ""
};

export type CartFormType = typeof initialState

export type TActionsCart = InferActionsType<typeof cartActions>

export const cartReducer = (state: CartFormType = initialState, action: TActionsCart) => {
    switch (action.type) {
        case "ADD_CONTACT_INFORMATION":
            return {
                ...state,
                email: action.email,
                address: action.address,
                phone: action.phone
            };
        case "ADD_PAYMENT_METHOD":
            return {
                ...state,
                paymentMethod: action.paymentMethod
            };
        case "ADD_CREDIT_CARD_INFORMATION":
            return {
                ...state,
                number: action.number,
                name: action.name,
                expiry: action.expiry,
                cvc: action.cvc
            };
            case "RESET_FORM":
                return {
                    ...initialState
                };
        default:
            return {
                ...state
            }
    }
};

export const cartActions = {
    addContactInformation: (email: string, address: string, phone: string) => ({
        type: 'ADD_CONTACT_INFORMATION',
        email,
        address,
        phone
    } as const),
    addPaymentMethod: (paymentMethod: string) => ({
        type: 'ADD_PAYMENT_METHOD',
        paymentMethod
    } as const),
    addCreditCardInformation: (number: string, name: string, expiry: string, cvc: string) => ({
        type: 'ADD_CREDIT_CARD_INFORMATION',
        number,
        name,
        expiry,
        cvc
    } as const),
    resetForm: () => ({
        type: 'RESET_FORM',
    } as const)
};