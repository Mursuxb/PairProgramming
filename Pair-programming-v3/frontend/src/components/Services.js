import { useState, useEffect } from "react";
import Service from "./Service";
import Title from "./Title";

function Services() {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/services";

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setServicesData(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);


  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData && servicesData.map((service) => (
            <Service key={service._id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
