import axios from "axios";


const fetchMongo = () => {

    const checkIfTableReserved = (tableNumber, reservationDate) => {
        return axios
          .get('http://localhost:8500/api/user/checkReservation', {
            params: {
              tableNumber,
              reservationDate,
            },
          })
          .then((response) => {
            const isReserved = response.data.isReserved;
            return isReserved;
          })
          .catch((error) => {
            console.error('Error checking reservation:', error);
            return false;
          });
      };

    return checkIfTableReserved;
}


export default fetchMongo