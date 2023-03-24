
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./homes.css";

import Widget from "../../components/widget/Widget";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* */}
      <div className="homeWidgets">
                <Widget/>
      </div>
    </div>
  );
}
