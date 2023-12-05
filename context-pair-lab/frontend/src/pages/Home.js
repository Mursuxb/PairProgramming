// components
import { useGoalContext } from "../hooks/useGoalContext";
import { useAuthContext } from "../hooks/useAuthContext";

import GoalDetails from "../components/GoalDetails";
import GoalForm from "../components/GoalForm";
import { useEffect} from "react";



const Home = () => {
  // const [goals, setgoals] = useState([]);
  const { goals, dispatch } = useGoalContext();
  const { user } = useAuthContext();
  const getGoals = async () => {
    const response = await fetch("/api/goals",{
      headers: { Authorization: `Bearer ${user.token}` },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data.error);
      // setgoals([]);
      
      
    }
    dispatch({ type: "SET_GOALS", payload: data })
  };
  useEffect(() => {
    getGoals();
    const interval = setInterval(getGoals, 500);
    return () => clearInterval(interval);
  }, [dispatch, user]); 
  return (
    <>
    <div className="home">
      <div className="goals">
        {goals && goals.map((goal) => (
          <GoalDetails key={goal._id} goal={goal} />
        ))}
        {!goals && <p>loading...</p>}
      </div>
      <GoalForm />
    </div>
    </>
  );
};

export default Home;
