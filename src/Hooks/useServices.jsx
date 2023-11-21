import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://server-site-assignment-eight.vercel.app/assignments")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    })

    return services;
};

export default useServices;