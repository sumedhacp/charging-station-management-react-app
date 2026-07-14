import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewVehicle = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-vehicle").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Booking ID</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Vehicle Registration Number</th>
                                    <th scope="col">Vehicle Brand</th>
                                    <th scope="col">Vehicle Model</th>
                                    <th scope="col">Battery Capacity (kWh)</th>
                                    <th scope="col">Connector Type</th>
                                    <th scope="col">Charging Date</th>
                                    <th scope="col">Time Slot</th>
                                    <th scope="col">Estimated Units (kWh)</th>
                                    <th scope="col">Charging Bay Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.bookingId}</td>
                                                    <td>{value.ownerName}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.vehicleRegistrationNumber}</td>
                                                    <td>{value.vehicleBrand}</td>
                                                    <td>{value.vehicleModel}</td>
                                                    <td>{value.batteryCapacityKwh}</td>
                                                    <td>{value.connectorType}</td>
                                                    <td>{value.chargingDate}</td>
                                                    <td>{value.timeSlot}</td>
                                                    <td>{value.estimatedUnitsKwh}</td>
                                                    <td>{value.chargingBayNumber}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewVehicle

