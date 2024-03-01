import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <h2>This is Home Page</h2>
      <Link to="/team">Go to Team Page</Link>
    </div>
  );
};

export default Home;
