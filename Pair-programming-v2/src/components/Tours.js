import React, { useState } from 'react';
import Tour from './Tour';
import Title from './Title';
import { tours } from '../data'; // Correct import statement

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    // Filter out the tour with the specified id
    const updatedTours = toursData.filter((tour) => tour.id !== id);
    // Update the state with the filtered tours
    setToursData(updatedTours);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour}>
              <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            </Tour>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;