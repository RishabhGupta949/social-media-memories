import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { FaBars ,FaTimes} from "react-icons/fa";

import "./home.css"

export default function Home() {
  const [ openSidebar, SetopenSidebar ]= useState(false);

  const handleSidebar = () => {
    SetopenSidebar(!openSidebar);
  }
  
  
  return (
    <>
    {(openSidebar)===false ?<FaBars onClick={handleSidebar} className="opensidebar"/> : <FaTimes onClick={handleSidebar} className="opensidebar"/>}
      < Topbar />
      <div className="homeContainer">
          {(openSidebar)===true ? <Sidebar /> : ""}
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
