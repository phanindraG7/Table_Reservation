// import React,{useState} from 'react';
// import axios from 'axios';
// const TableReservation = () => {
//     const [tableNumber, setTableNumber] = useState("");
//     const [capacity, setCapacity] = useState("");
//     const [reservationTime, setReservationTime] = useState("");
//     const [reservationType, setReservationType] = useState("");
//     const [customerName, setCustomerName] = useState("");
//     const [customerEmail, setCustomerEmail] = useState("");
//     const [customerPhone, setCustomerPhone] = useState("");
//     const [additionalNotes, setAdditionalNotes] = useState("");
//     // const [selectedDinnerTime,setselectedDinnerTime] = useState("");
//     // const [selectedLunchTime,setselectedLunchTime]=useState("");
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5000/reservetable',{
//             tableNumber,
//             capacity,
//             reservationTime,
//             reservationType,
//             customerName,
//             customerEmail,
//             customerPhone,
//             additionalNotes
//         }).then(
//             () => alert("Data Submitted Succesfully")
//         )
       
//         // Perform form submission logic here
//       };
    
//       const handleTableNumberChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional validation here, if required
//         setTableNumber(value);
//       };
    
//       // const handleLunchTimingsChange = (e) => {
//       //   const value = e.target.value;
    
//       //   selectedLunchTime(value);
//       // };
//       // const handleDinnerTimingsChange = (e) => {
//       //   const value = e.target.value;
    
//       //   selectedDinnerTime(value);
//       // };
    
//       const handleCapacityChange = (e) => {
//         const value = e.target.value;
//         // Validate that only numbers are entered
//         if (/^\d*$/.test(value)) {
//           setCapacity(value);
//         }
//       };
    
//       const handleReservationTimeChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional validation here, if required
//         setReservationTime(value);
//       };
    
//       const handleReservationTypeChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional logic here, if required
//         setReservationType(value);
//       };
    
//       const handleCustomerNameChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional validation here, if required
//         setCustomerName(value);
//       };
    
//       const handleCustomerEmailChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional validation here, if required
//         setCustomerEmail(value);
//       };
    
//       const handleCustomerPhoneChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional validation here, if required
//         setCustomerPhone(value);
//       };
    
//       const handleAdditionalNotesChange = (e) => {
//         const value = e.target.value;
//         // Perform any additional logic here, if required
//         setAdditionalNotes(value);
//       };


// return (
//     <center>
//     <form className="form" onSubmit={handleSubmit}>
//         <h2>Table Reservation</h2>
//       <label>
//         Table Number:
//         <select value={tableNumber} onChange={handleTableNumberChange}>
//           <option value="">Select</option>
//           <option value="1">Table 1</option>
//           <option value="2">Table 2</option>
//           {/* Add more table options here */}
//         </select>
//       </label>
//       <br />

//       <label>
//         Capacity:
//         <input
//           type="text"
//           value={capacity}
//           onChange={handleCapacityChange}
//           pattern="[0-9]*"
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Reservation Time:
//         <input
//           type="date"
//           value={reservationTime}
//           onChange={handleReservationTimeChange}
//           required
//         />
//         <select value={reservationType} onChange={handleReservationTypeChange}>
//           <option value="">Select Reservation Type</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//         </select>
//       </label>

//       {/* Display the hidden input based on the reservation type */}
//       {reservationType === "lunch" && (
//         <label>
//           Select Time:
//           <select >
//             <option value="11:00 AM">11:00 AM</option>
//             <option value="11:15 AM">11:15 AM</option>
//             {/* Add more lunch time options here */}
//           </select>
//         </label>
//       )}

//       {reservationType === "dinner" && (
//         <label>
//           Select Time:
//           <select >
//             <option value="8:00 PM">8:00 PM</option>
//             <option value="8:15 PM">8:15 PM</option>
//             {/* Add more dinner time options here */}
//           </select>
//         </label>
//       )}
//       <br />
//       <label>
//         Customer Name:
//         <input
//           type="text"
//           value={customerName}
//           onChange={handleCustomerNameChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Customer Email:
//         <input
//           type="email"
//           value={customerEmail}
//           onChange={handleCustomerEmailChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Customer Phone:
//         <input
//           type="tel"
//           value={customerPhone}
//           onChange={handleCustomerPhoneChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Additional Notes:
//         <textarea
//           value={additionalNotes}
//           onChange={handleAdditionalNotesChange}
//         />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//     </center>
//   );

// }

// export default TableReservation