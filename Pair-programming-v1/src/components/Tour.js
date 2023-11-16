import React from 'react';

function Tour({ id, image, date, info, title, location, cost, duration, removeTour }) {

    console.log('removeTour', typeof removeTour);
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="Tibet Adventure" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>from ${cost}</p>
          <p>{duration} days</p>
          {/* Include the "Not Interested" button */}
          <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
      </div>
    </article>
  );
}

export default Tour;