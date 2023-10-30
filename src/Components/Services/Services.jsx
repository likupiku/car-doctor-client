import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-2xl font-bold  text-orange-500">Services</h1>
                <h3 className="text-6xl font-semibold ">Our Service Area</h3>
                <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    > </ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Services;