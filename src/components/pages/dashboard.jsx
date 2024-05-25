import "./dashboard.scss";
import Sidebar from "../sideBar/sidebar";
import Navbar from "../header/navbar"; 
import Widget from "../widget/widget";
const Dashboard = () => {
    return (
      <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="annonce" />
          <Widget type="reservation" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
    );
  };
  
  export default Dashboard;