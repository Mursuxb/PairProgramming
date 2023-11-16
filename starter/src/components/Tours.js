import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>our tours</h2>
        </div>
        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;
