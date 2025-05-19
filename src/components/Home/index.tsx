import LatestProduct from "../LatestProduct";
import Card from "../Card";
import Banner from "../Banner";

const Home = () => {
  return (
    <>
      <Banner title="Home" />
      <LatestProduct />
      <div className="card-section">
        <div className="container">
          <div className="cards-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           </div>
        </div>
      </div>
    </>
  );
};

export default Home;
