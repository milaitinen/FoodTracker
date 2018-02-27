/* eslint-disable no-undef */
import { INSERT_FIRSTNAME, INSERT_LASTNAME, INSERT_ID } from './actions';

const initialState = {
    firstName: null,
    lastName: null,
    customerID: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_FIRSTNAME:
            return {
                ...state,
                firstName: action.firstName
            };
        case INSERT_LASTNAME:
            return {
                ...state,
                lastName: action.lastName
            };
        case INSERT_ID:
            return {
                ...state,
                customerID: action.customerID
            };
        default:
            return state;
    }
};

export default userReducer;
