import { useState, useEffect, useContext } from "react";
import { BookingContext } from "../context/booking/BookingContext";

// Fake API
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

// Custom hook to fetch available times
export const useAvailableTimes = (selectedDate) => {
    const { state, dispatch } = useContext(BookingContext);
    const [loadingTime, setLoadingTime] = useState(false);
    const [error, setError] = useState(null);

    // Fetch available times whenever selectedDate changes
    useEffect(() => {
        const fetchAvailableTimes = async () => {
            setLoadingTime(true);
            setError(null);

            try {
                const times = fetchAPI(new Date(selectedDate)); // Fetch available times for selected date
                dispatch({
                    type: "SET_AVAILABLE_TIMES",
                    payload: times, // Dispatch the fetched available times to the context
                });
            } catch (error) {
                setError("Error fetching available times");
            } finally {
                setLoadingTime(false);
            }
        };

        fetchAvailableTimes();
    }, [selectedDate, dispatch]); // Trigger effect when the selected date changes

    return {
        availableTimes: state.availableTimes,
        loadingTime,
        error,
    };
};
