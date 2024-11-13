
 import { FaCar, FaRegUser } from "react-icons/fa";

 import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
 import { FaArrowRightLong } from "react-icons/fa6";
 import { useState } from "react";

 import './Style.css'
 import { PiHandCoinsFill } from "react-icons/pi";
 import { GrMoney } from "react-icons/gr";
import Link from "next/link";
import { useEffect } from "react";
import { GoHome } from "react-icons/go";
import { RiLoginCircleLine } from "react-icons/ri";

interface AppSidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  closeSidebar: () => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ activeItem, setActiveItem, closeSidebar }) => {
  const [isUsersDropdownOpen, setUsersDropdownOpen] = useState(false);
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
     const [isPurchaseDropdownOpen, setPurchaseDropdownOpen] = useState(false);
     const [isSalesDropdownOpen, setSalesDropdownOpen] = useState(false);
    
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <nav className="flex flex-col p-4 space-y-2  dark:bg-black ">
      <ul className="text-gray">
        <li
          className={`d sidebar-item p-2 flex items-center ${activeItem === "Home" ? "active" : ""}`}
          onClick={() => handleItemClick("Home")}
        >
          <GoHome className="mr-2 shake-icon" />
          <Link href="/dashboard" >Dashboard</Link>
        </li>
        
        <li
          className={`sidebar-item p-2 flex items-center ${
            activeItem === "Users" || ["User List"].includes(activeItem)
               ? "active"
              : ""
           }`}
          onClick={() => {
            setActiveItem("Users");
            setUsersDropdownOpen(!isUsersDropdownOpen);
           }}
        >
           <FaRegUser className="mr-2 shake-icon" />
          <span>Users</span>
         <span style={{ marginLeft: "4rem" }}>
             {isUsersDropdownOpen ? <IoIosArrowDown className="ml-2" /> : <IoIosArrowForward className="ml-2" />}
          </span>
         </li>

        {isUsersDropdownOpen && (
          <ul className="ml-4">
             <li
               className={`sidebar-item p-2 flex items-center ${activeItem === "Users" ? "active" : ""}`}
              onClick={() => {setActiveItem("Users");handleItemClick("Users")}}
             
            >
               <FaArrowRightLong className="mr-2" />
               <Link href="/dashboard/users/usercards">Users</Link> {/* Link for User List */}
            </li>
             <li
               className={`sidebar-item p-2 flex items-center ${activeItem === "User List" ? "active" : ""}`}
               onClick={() => {setActiveItem("User List");handleItemClick("User List")}}
             >
             <FaArrowRightLong className="mr-2" />
              <Link href="/dashboard/users/userlist">User List</Link> {/* Link for User List */}
             </li>
            
           </ul>
        )}

        <li
          className={`sidebar-item p-2 flex items-center ${
            activeItem === "Products" || ["Product List","Product"].includes(activeItem) ? "active" : ""
          }`}
           onClick={() => {
             setActiveItem("Products");
             setProductsDropdownOpen(!isProductsDropdownOpen);
           }}
        >
           <FaCar className="mr-2 shake-icon" />
          <span>Products</span>
          <span style={{ marginLeft: "2.7rem" }}>
             {isProductsDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </li>

        {isProductsDropdownOpen && (
          <ul className="ml-4">
             <li
              className={`sidebar-item p-2 flex items-center ${activeItem === "Product List" ? "active" : ""}`}
               onClick={() => {setActiveItem("Product List");handleItemClick("Product List")}}
             >
              <FaArrowRightLong className="mr-2" />
              <Link href="/dashboard/products/productlist">Product List</Link> {/* Link for Product List */}
            </li>
            <li
              className={`sidebar-item p-2 flex items-center ${activeItem === "Product" ? "active" : ""}`}
               onClick={() => {setActiveItem("Product");handleItemClick("Product")}}
             >
              <FaArrowRightLong className="mr-2" />
              <Link href="/dashboard/products/product">Product</Link> {/* Link for Product List */}
            </li>
           

          </ul>
        )}

<li
          className={`sidebar-item p-2 flex items-center ${activeItem === "Purchase" ? "active" : ""}`}
          onClick={() => handleItemClick("Purchase")}
        >
          <PiHandCoinsFill className="mr-2 shake-icon" />
          <Link href="/dashboard/purchase">Purchases</Link>
        </li>




 <li
          className={`sidebar-item p-2 flex items-center ${activeItem === "Sales" ? "active" : ""}`}
          onClick={() => handleItemClick("Sales")}
        >
          <GrMoney className="mr-2 shake-icon" />
          <Link href="/dashboard/sale">Sales</Link>
        </li>

         <li
          className={`sidebar-item p-2 flex items-center ${activeItem === "Signin" ? "active" : ""}`}
          onClick={() => handleItemClick("Signin")}
        >
          <RiLoginCircleLine className="mr-2 shake-icon" />
          <Link href="/Signin">SignIn</Link>
        </li>

      </ul>
    </nav>
  );
};

export default AppSidebar;







