import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import CategoryStrip from "../components/CategoryStrip";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="banner" onClick={() => navigate("/shop")}>
        <h2>⚡ Today's Special Deal</h2>
        <h1>Summers are hot, we make you cool!</h1>
        <p>Electronics — Starting @₹99</p>
      </div>
      <CategoryStrip categoryName='electronics' />
    </div>
  );
}
export default Home;
