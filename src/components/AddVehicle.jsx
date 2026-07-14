import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'


const AddVehicle = () => {

    const [input, changeInput] = useState(

        {
            bookingId: "",
            ownerName: "",
            email: "",
            phone: "",
            vehicleRegistrationNumber: "",
            vehicleBrand: "",
            vehicleModel: "",
            batteryCapacityKwh: "",
            connectorType: "",
            chargingDate: "",
            timeSlot: "",
            estimatedUnitsKwh: "",
            chargingBayNumber: ""
        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-vehicle", input).then(

            (response) => {
                console.log(response.data)
                alert("Vehicle Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding vehicle!", error)
                alert("Failed to Add Vehicle!")
            }

        )

    }


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID : </label>
                                <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name: </label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email: </label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone: </label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Registration Number: </label>
                                <input type="text" className="form-control" name="vehicleRegistrationNumber" value={input.vehicleRegistrationNumber} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Brand: </label>
                                <input type="text" className="form-control" name="vehicleBrand" value={input.vehicleBrand} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Model: </label>
                                <input type="text" className="form-control" name="vehicleModel" value={input.vehicleModel} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Battery Capacity (kWh): </label>
                                <input type="text" className="form-control" name="batteryCapacityKwh" value={input.batteryCapacityKwh} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Connector Type: </label>
                                <input type="text" className="form-control" name="connectorType" value={input.connectorType} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Date: </label>
                                <input type="date" className="form-control" name="chargingDate" value={input.chargingDate} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Time Slot: </label>
                                <input type="text" className="form-control" name="timeSlot" value={input.timeSlot} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Estimated Units (kWh): </label>
                                <input type="text" className="form-control" name="estimatedUnitsKwh" value={input.estimatedUnitsKwh} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Bay Number: </label>
                                <input type="text" className="form-control" name="chargingBayNumber" value={input.chargingBayNumber} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddVehicle