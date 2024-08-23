import Sidebar from "../../sideBar/sidebar";
import Navbar from "../../header/navbar";
import { MembersTable } from "../../table/table";
import './listUsers.scss';


const ListUsers = () => {
    return (
      <div className='list'>
        <Sidebar/>
        <div className='listContainer'>
          <Navbar/>
          <div className="tableSection">
          <MembersTable />
          </div>
        </div>
      </div>
    )
  }
  
  export default ListUsers