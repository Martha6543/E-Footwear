import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sbWrapper">
        <div className="sbMenu">
          <h3 className="sbTitle">Dashboard</h3>
          <ul className="sbList">
            <Link to="/" className="link">
            <li className="sbListItem active">
              Home
            </li>
            </Link>
                    
          </ul>
        </div>
        <div className="sbMenu">
          <h3 className="sbTitle">Quick Menu</h3>
          <ul className="sbList">
            <Link to="/users" className="link">
              <li className="sbListItem">
                <PermIdentity className="sbIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sbListItem">
                <Storefront className="sbIcon" />
                Products
              </li>
            </Link>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}
