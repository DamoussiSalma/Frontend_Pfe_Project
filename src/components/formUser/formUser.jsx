import './formUser.scss';
 import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {productInputs} from './formsource'
import Navbar from '../header/navbar';
import Sidebar from '../sideBar/sidebar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
  Card,
CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
} from "@material-tailwind/react";

const AddForm = () => {
    const [file, setFile] = useState("");
    return ( 
<>
<div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Ajouter membre
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              ajouter informations about membre
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
           
            <Button  className="flex items-center gap-3"  onClick={() => window.location.reload()}>
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
    
         
        </div>
      </CardHeader>
      <CardBody className="overflow px-0">
    
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {productInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label> 
                  <input type={input.type} placeholder={input.placeholder} /> 
                </div>
              ))}
              <Button className='button flex items-center gap-3'><AddCircleOutlineIcon strokeWidth={2} className="h-4 w-4" />Ajouter</Button>
            </form>
          </div>
        </div>
      
      </CardBody>
      
    </Card>
        
      </div>
    </div>
</>
     );
}
 
export default AddForm;