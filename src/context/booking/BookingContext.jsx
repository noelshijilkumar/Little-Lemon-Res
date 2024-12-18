import { createContext, useReducer } from "react";
import { initialBooking, bookingReducer } from "./BookingReducer";

export const BookingContext = createContext();

export const BookingProvider = ({children}) => {
    const [state, dispatch] = useReducer(bookingReducer, initialBooking);

    return (
        <BookingContext.Provider value={{ state, dispatch }}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingContext;