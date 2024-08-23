import Sidebar from "../../sideBar/sidebar";
import Navbar from "../../header/navbar";
// import Card from "../../annonceCard/annoncecard";
 import  {AnnonceTable}  from "../../annonceTable/annoncetable";
 import './annonceList.scss';
const AnnonceList = () => {
    return ( 
         <div className='list'>
        <Sidebar/>
        <div className='listContainer'>
          <Navbar/>
          <div className="tableSection">
         <AnnonceTable/>
          </div>
        </div>
      </div>
     );
}
 
export default AnnonceList;
 
 



