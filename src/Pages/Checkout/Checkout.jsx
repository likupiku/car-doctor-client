import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Checkout = () => {
    const service = useLoaderData()
    console.log(service)
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleOrder = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const message = form.message.value;
        console.log(name, date, email, due, message)
        const booking = {
            name,
            img,
            date,
            email,
            service_id: _id,
            service_name: title,
            due,
            message
        }

        console.log(booking)


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Orderd!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <h1 className="text-center text-2xl font-medium ">Book Service : <span className="text-orange-500 text-4xl font-semibold border-2 p-4 border-orange-500 rounded-xl">{title} </span> </h1>

            <div className="card  w-3/4 mx-auto shadow-2xl bg-base-100 mt-10">
                <form onSubmit={handleOrder} className="card-body">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due</span>
                            </label>
                            <input type="text" name="due" defaultValue={price} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Any Message?</span>
                        </label>
                        <input type="text" name="message" placeholder="Your Message" className="input input-bordered h-28" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  btn-block text-white bg-orange-400 hover:text-orange-500  border-4 hover:border-orange-500 " type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Checkout;