import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingTable from "./BookingTable";

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url])

    const handledelete = id => {

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully!")
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
    }


    const handleConfirm = id => {
        console.log("clicked")
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update status
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }

            })
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-medium">Your Bookings :{bookings.length}</h1>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingTable
                            key={booking._id}
                            booking={booking}
                            handledelete={handledelete}
                            handleConfirm={handleConfirm}
                        ></BookingTable>
                        )
                    }
                </tbody>
            </table>
        </div>


    );
};

export default Bookings;