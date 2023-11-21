import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchMongo from '../../helpers/fetchMongo';
import postMongo from '../../helpers/postMongo';
import Table from './Table';

const Reservation = () => {
  const initialFormData = {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    reservationDate: '',
    mealOption: '',
    reservationTime: '',
    tableNumber: null,
    capacity:null,
    additionalNotes: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [tables] = useState([
    { id: 1, capacity: 2, isSelected: false },
    { id: 2, capacity: 4, isSelected: false },
    { id: 3, capacity: 6, isSelected: false },
    { id: 4, capacity: 8, isSelected: false },
    { id: 5, capacity: 12, isSelected: false },
  ]);


  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableSelect = (selectedTable) => {
    setFormData({
      ...formData,
      tableNumber : selectedTable.id,
      capacity : selectedTable.capacity
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.tableNumber) {
      setErrorMessage('Please select a table.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8500/booknow', formData);
      console.log(response);
      alert(response.data)
    } catch (error) {
      console.error('Error during POST request:', error);
      alert(error.response.data.error)
    }
    
    setErrorMessage('');
  
    console.log('Form data submitted:', formData);

    setFormData(initialFormData);
  };

  return (
    <div className="container">
      <h1 id='reverseh1' className="text-center mt-5">Table Reservation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name='customerName'
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerEmail">Customer Email:</label>
          <input
            type="email"
            className="form-control"
            id="customerEmail"
            name='customerEmail'
            value={formData.customerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerPhone">Customer Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="customerPhone"
            name='customerPhone'
            value={formData.customerPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationDate">Reservation Date:</label>
          <input
            type="date"
            className="form-control"
            id="reservationDate"
            name='reservationDate'
            value={formData.reservationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mealOption">Meal Option:</label>
          <select
            className="form-control"
            id="mealOption"
            name='mealOption'
            value={formData.mealOption}
            onChange={handleChange}
            required
          >
            <option value="">Select Meal Option</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reservationTime">Reservation Time:</label>
          <select
            className="form-control"
            id="reservationTime"
            name='reservationTime'
            value={formData.reservationTime}
            onChange={handleChange}
            required
          >
            <option value="">Select Time</option>
            {formData.mealOption === 'lunch' ? (
              <>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                {/* Add more lunch time options */}
              </>
            ) : formData.mealOption === 'dinner' ? (
              <>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="10:30 PM">10:30 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                {/* Add more dinner time options */}
              </>
            ) : null}
          </select>
        </div>
        <div className="table-container">
          {tables.map((table) => (
            <Table
              key={table.id}
              id={table.id}
              text={table.text}
              isSelected={table.id === formData.tableNumber}
              isSelectable={true}
              onClick={() => handleTableSelect(table)}
            />
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            className="form-control"
            name='additionalNotes'
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </div>
        <button style={{backgroundColor:"#f5deb3" ,marginLeft:"45%"}} type="submit" className="btn btn-primary  text-black" disabled={!formData.tableNumber}>
          Submit
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Reservation;