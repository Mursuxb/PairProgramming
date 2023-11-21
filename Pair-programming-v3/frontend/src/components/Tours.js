import { useState, useEffect } from "react";
import Tour from "./Tour";
import Title from "./Title";
import AddTour from "./AddTour";

function Tours() {
  const [toursData, setToursData] = useState(null);
  const apiurl = "http://localhost:5000/api/tours";

  const removeTour = async (id) => {
		await fetch(`${apiurl}/${id}`, {
      method: "DELETE",
    });
}


  useEffect(() => {
  
    fetch(apiurl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setToursData(data);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
  }, [toursData]);

  

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData && toursData.map((tour) => (
            <Tour key={tour._id} removeTour={removeTour} {...tour} />
          ))}
        </div>
        <AddTour />
      </section>
    </div>
  );
}

export default Tours;
