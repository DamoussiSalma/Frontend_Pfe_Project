
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaShower,

} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiWifi, 
  BiWorld,
 
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";

import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [

  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Studio",
    icon: <GiWindmill />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Appartement",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Maison",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Villa",
    icon: <TbPool />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Bangalow",
    icon: <TbBeach />,
    description: "This property is close to the beach!",
  },
 
  {
    img: "assets/countryside_cat.webp",
    label: "Farme",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  
  {
    img: "assets/island_cat.webp",
    label: "Islands",
    icon: <GiIsland />,
    description: "This property is on an island!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Camping",
    icon: <GiForestCamp />,
  },
 
];

export const types = [
  {
    name: "endroit entier",
    description: "Les clients ont toute la place pour eux-mêmes",
    icon: <FaHouseUser />,
  },
  {
    name: "chambre",
    description:
      "Les clients ont leur propre chambre dans une maison, ainsi que l’accès aux lieux partagés",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "chambre partagée",
    description:
      "Les clients dorment dans une chambre ou un espace commun qui peut être partagé avec vous ou d’autres",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
 
  {
    name: "shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
 
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
 
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },

  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
 
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
 
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },

  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];

export const nav = [
  {
    text: "Annonces",
    path: "/annonce",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  
  {
    text: "contact",
    path: "/contact",
  },
 
]
export const featured = [
  {
    cover: "../../assets/hero/h1.png",
    name: "Bangalow",
    total: "122 Property",
  },
  {
    cover: "../../assets/hero/h2.png",
    name: "Maison",
    total: "155 Property",
  },
  {
    cover:"../../assets/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../../assets/hero/h4.png",
    name: "Studio",
    total: "80 Property",
  },
  {
    cover: "../../assets/hero/h5.png",
    name: "Villa",
    total: "80 Property",
  },
]
export const list = [
  {
    id: 1,
    cover: "../images/list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Sousse",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/p-2.png",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, Sousse",
    category: "For Rent",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../images/list/p-7.png",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, Sousse",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../images/list/p-4.png",
    name: "Herringbone Realty",
    location: "5621 Liverpool, Bizert",
    category: "For Rent",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../images/list/p-5.png",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Monastir",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../images/list/p-6.png",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Sousse",
    category: "For Rent",
    price: "$2,742",
    type: "Apartment",
  },
]

export const location = [
  {
    id: 1,
    name: "Sousse",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-1.png",
  },
  {
    id: 2,
    name: "Hammamet",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-2.png",
  },
  {
    id: 3,
    name: "Nabeul",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-3.png",
  },
  {
    id: 4,
    name: "Monastir",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Studios",
    cover: "./images/location/city-4.png",
  },
  {
    id: 5,
    name: "Ain drahem",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Studios",
    cover: "./images/location/city-5.png",
  },
  {
    id: 6,
    name: "Tunis",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Studios",
    cover: "./images/location/city-6.png",
  },

]
export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]
