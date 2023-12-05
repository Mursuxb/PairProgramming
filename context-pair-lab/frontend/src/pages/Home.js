// components
import { set } from "mongoose";
import GoalDetails from "../components/GoalDetails";
import GoalForm from "../components/GoalForm";
import { useEffect,useState} from "react";



const Home = () => {
  const [goalsArray, setGoalsArray] = useState([]);
  const getGoals = async () => {
    const response = await fetch("/api/goals",{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data.error);
      setGoalsArray([]);
      return;
    }
    setGoalsArray(data);
  };
  useEffect(() => {
    getGoals();
    const interval = setInterval(getGoals, 1000);
    return () => clearInterval(interval);
  }, []); 
  return (
    <>
    <div className="home">
      <div className="goals">
        {goalsArray.length === 0 && <h2>No Goals Found</h2>}
        {goalsArray.map((goal) => (
          <GoalDetails key={goal._id} goal={goal} />
        ))}
      </div>
      <GoalForm />
    </div>
    </>
  );
};

export default Home;
