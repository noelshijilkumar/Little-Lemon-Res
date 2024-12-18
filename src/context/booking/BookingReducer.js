//Init state
export const initialBooking = {
    basicInfo: {
        name: "",
        phone: "",
        email: "",
    },
    reservationInfo: {
        date: "",
        time: "",
        guests: 1,
        occasion: "",
        seating: "",
        specialRequest: "",
    },
    step: 1,
    totalSteps: 3,
    availableTimes: []
};

export const bookingReducer = (state, action) => {
    switch (action.type) {
        case "SET_BASIC_INFO":
            return {
                ...state,
                basicInfo: { ...state.basicInfo, ...action.payload },
            };
        case "SET_RESERVATION_INFO":
            return {
                ...state,
                reservationInfo: { ...state.reservationInfo, ...action.payload },
            };
        case "SET_AVAILABLE_TIMES":
            return {
                ...state,
                availableTimes: action.payload,
            };
        case "NEXT_STEP":
            return {
                ...state,
                step: state.step + 1,
            };
        case "PREVIOUS_STEP":
            return {
                ...state,
                step: state.step - 1,
            };
        case "REVERSE_STEP":
            return {
                ...state,
                step: 3,
            };
        case "RESET":
            return initialBooking;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};