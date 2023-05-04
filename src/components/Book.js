import React from 'react'
import {  useLocation } from "react-router-dom";
export default function Book() {
    const location = useLocation();
    const propsData = location.state;



    // const form = document.querySelector('form');


    if (localStorage.getItem('userData')) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        document.getElementById('name').value = userData.name;
        document.getElementById('email').value = userData.email;
        document.getElementById('phone').value = userData.phone;
    }


    const sub = (e) => {
        e.preventDefault();


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;


        const userData = { name, email, phone };
        localStorage.setItem('userData', JSON.stringify(userData));


        alert('Data saved to local storage!');

    };




    return (
        <>
            <div className="container my-3">
                <h3>Movie Name : {propsData.name}</h3>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlhtmlFor="phone">Phone:</label>
                        <input type="tel" className="form-control" id="phone" name="phone" />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={sub}>Submit</button>
                </form>

            </div>

        </>
    )
}
