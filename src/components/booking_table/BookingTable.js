import React from 'react';
import "./BookingTable.css";
import selections from "./selections.json"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';
import { useState } from "react";

let hour;
let name = "";
let email;
let numberOfPerson = null;

function getData(array) {
	for(const element of array) {
		if(element.name === "hour") {
			hour = element.value;
		} 
		else if(element.name === "name") {
			name = element.value.trim();
		}
		else if(element.name === "email") {
			email = element.value.trim()
			
		}
		else if(element.name === "numOfPers") {
			numberOfPerson = element.value;
		}
	}
}

const BookingTable = () => {
	function logOutInformations() {
		getData([document.querySelector("select"),...document.querySelectorAll("input")])

		const currentHour = new Date().getHours()
		const bookingHour = parseInt(hour.split(":")[0]);

		if((currentHour - bookingHour) <= 1 ) {
			alert("You cannot book a table one hour before the actual time.")
			return;
		}
		if(hour === "Select Hour") {
			alert("You must select an hour.")
			return;
		}
		if(name === "") {
			alert("The name is empty. It is required.");
			return;
		}
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
			
			alert("Invalid email adress.")
			return;
		}
		if(selectedDay === null) {
			alert("Choosing a date is reqiured.")
			return;
		}
		if(numberOfPerson === null | numberOfPerson <= 0) {
			alert("You must book for at least one person.")
			return;
		}

		alert(
			`Your Booking: 
			Date: ${selectedDay.day} ${selectedDay.month} ${selectedDay.year} 
			Time: ${hour} 
			Booking Name: ${name} 
			Booking Email: ${email} 
			Booking for: ${numberOfPerson} people
			Thanks for booking! We'll see you soon! :)`
		)
	}

	const [selectedDay, setSelectedDay] = useState(null);
	return (
		<div className="booking-table">
			<div className="form-wrapper">
				<div className="calendar">
					<Calendar
						value={selectedDay}
						onChange={setSelectedDay}
						shouldHighlightWeekends
						minimumDate={utils().getToday()}
					/>
				</div>
				<div className="booking-inform">
					<select name="hour" className="inform">
						<option defaultValue value="Select Hour">Select Hour</option>
						{selections.time.map((timeToBook) => (
							<option key={timeToBook.hour} value={timeToBook.hour}>{timeToBook.hour}</option>
						))}

					</select>
					<input name="name" className="inform" type="text" placeholder="Name" required></input>
					<input name="email" className="inform" type="email" placeholder="E-mail" required></input>
					<input name="numOfPers" className="inform" type="number" placeholder="Number of people" required></input>
				</div>
			</div>

			<button id="book" onClick={logOutInformations}>Book it!</button>
		</div>
	)
}

export default BookingTable
