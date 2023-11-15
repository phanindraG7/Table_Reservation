import axios from "axios";

const postMongo = () => {

    const tableReserve = (reservationData) => {
        axios
            .post('http://localhost:8500/api/user/booknow', reservationData)
            .then(() => {
              alert('Table Reserved Successfully');
              
            })
            .catch((error) => {
              console.error('Error submitting data:', error);
              alert('Error checking the reservation. Please try again.');
            });
    }

    return tableReserve;
}

export default postMongo