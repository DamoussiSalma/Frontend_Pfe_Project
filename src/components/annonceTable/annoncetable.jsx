import {MagnifyingGlassIcon,ChevronUpDownIcon} from "@heroicons/react/24/outline";
import { UserPlusIcon} from "@heroicons/react/24/solid";
import React,{useState,useEffect} from "react";
import AnnonceCard from "../annonceCard/annoncecard"
import {
  Card,
CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Accepted",
    value: "accepted",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];
 

 
export function AnnonceTable() {

const [users,setUsers]=useState([]);
const [activeTab, setActiveTab] = useState("all");
const [filteredUsers, setFilteredUsers] = useState([]);

const formatDate = (date) => {
  const d = new Date(date);
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

const getUsers = async () => {
  const accessToken = localStorage.getItem('accessToken');
  let url = "http://localhost:3000/user/all"; // Default URL for fetching all users

  // Adjust URL based on activeTab value
  if (activeTab === "verified") {
    url = "http://localhost:3000/user/verified";
  } else if (activeTab === "notVerified") {
    url = "http://localhost:3000/user/notVerified";
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    });

    const data = await response.json();
    console.log(data);
    setUsers(data);
  } catch (err) {
    console.log("Fetch Listings Failed", err.message);
  }
};






useEffect(() => {
  getUsers();
}, [activeTab]); // Trigger getUsers when activeTab changes

const handleTabChange = (value) => {
  setActiveTab(value);
};

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Annonces list
            </Typography>
            
            <Typography color="gray" className="mt-1 font-normal">
              See information about all annonces
            </Typography>
          </div>
          
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter annonce
            </Button>
            <Button variant="outlined" className="flex items-center gap-3" onClick={() => window.location.reload()}>
              Refresh
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value={activeTab} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

        <AnnonceCard/>
       
      </div>
        
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}