import "./index.scss";

interface IBannerProps {
  title: string;
}

const Banner = (props: IBannerProps) => {
  return (
    <div className="store-background">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Banner;
