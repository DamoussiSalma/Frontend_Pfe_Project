import "./sidebar.css";
import {Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";



import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  const [nb,setNb]=useState();

  const getnb = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/annonce/count`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setNb(data);
    } catch (err) {
      console.log("annonce count Failed", err.message);
    }
  };

  useEffect(() => {
      getnb();
     
    }, []);



 return (
 <div className="sidebar"> 
   <Card className="h-[calc(180vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
     <div className="mb-2 p-4">
       <Typography variant="h5" color="blue-gray">
         Vacay
       </Typography>
     </div>
     <List>
       <Accordion
         open={open === 1}
         icon={
           <ChevronDownIcon
             strokeWidth={2.5}
             className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
           />
         }
       >
         <ListItem className="p-0" selected={open === 1}>
           <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
             <ListItemPrefix>
               <PresentationChartBarIcon className="h-5 w-5" />
             </ListItemPrefix>
             <Typography color="blue-gray" className="mr-auto font-normal">
              <Link to ="/dashboard">Dashboard</Link> 
             </Typography>
           </AccordionHeader>
         </ListItem>
  
       </Accordion>
       <Accordion
         open={open === 2}
         icon={
           <ChevronDownIcon
             strokeWidth={2.5}
             className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
           />
         }
       >
         <ListItem className="p-0" selected={open === 2}>
           <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
             <ListItemPrefix>
               <UserGroupIcon className="h-5 w-5" />
             </ListItemPrefix>
             <Typography  color="blue-gray" className="mr-auto font-normal">
             <Link to ="/users">Users</Link> 
             </Typography>
           </AccordionHeader>
         </ListItem>
         <AccordionBody className="py-1">
           <List className="p-0">
             <ListItem>
               <ListItemPrefix>
                 <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
               </ListItemPrefix>
               Propriétaire
             </ListItem>
             <ListItem>
               <ListItemPrefix>
                 <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
               </ListItemPrefix>
               Locataire
             </ListItem>
           </List>
         </AccordionBody>
       </Accordion>
       <hr className="my-2 border-blue-gray-50" />
       <ListItem>
         <ListItemPrefix>
           <InboxIcon className="h-5 w-5" />
         </ListItemPrefix>
         <Link to ="/annonces">Annonces</Link> 
         <ListItemSuffix>
           <Chip value={nb} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
         </ListItemSuffix>
       </ListItem>

       <ListItem>
         <ListItemPrefix>
           <UserCircleIcon className="h-5 w-5" />
         </ListItemPrefix>
         Profile
       </ListItem>
       <ListItem>
         <ListItemPrefix>
           <Cog6ToothIcon className="h-5 w-5" />
         </ListItemPrefix>
         Settings
       </ListItem>
       <ListItem>
         <ListItemPrefix>
           <PowerIcon className="h-5 w-5" />
         </ListItemPrefix>
         Log Out
       </ListItem>
     </List>
   </Card>
 
    </div>
    )
  }
  
  export default Sidebar;