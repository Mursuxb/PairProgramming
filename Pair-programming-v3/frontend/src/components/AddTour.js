import { useState } from "react"

export default function AddTour() {

    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [info, setInfo] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [cost, setCost] = useState("");
    const [duration, setDuration] = useState("");
    const apiUrl = "http://localhost:5000/api/tours";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tour = { image, date, info, title, location, cost, duration };

        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(tour),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            console.log("Error");
        }
        if (response.ok) {
            setImage("");
            setDate("");
            setInfo("");
            setTitle("");
            setLocation("");
            setCost("");
            setDuration("");
            console.log("new tour added:", json);
        }
    }


    return (
        <div className="create">
            <h2>Add a New Tour</h2>
            <form onSubmit={handleSubmit}>
                <label>Tour image:</label>
                <input
                    type="text"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label>Tour date:</label>
                <input
                    type="text"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label>Tour info:</label>
                <textarea
                    required
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                ></textarea>
                <label>Tour title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Tour location:</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label>Tour cost:</label>
                <input
                    type="text"
                    required
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <label>Tour duration:</label>
                <input
                    type="text"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <button>Add Tour</button>
            </form>
        </div>
    )
}


