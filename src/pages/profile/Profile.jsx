import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { FaBars ,FaTimes} from "react-icons/fa";

export default function Profile() {

  const [ openSidebar, SetopenSidebar ]= useState(false);

  const handleSidebar = () => {
    SetopenSidebar(!openSidebar);
  }

  return (
    <>
    {(openSidebar)===false ?<FaBars onClick={handleSidebar} className="opensidebar"/> : <FaTimes onClick={handleSidebar} className="opensidebar"/>}
      <Topbar />
      <div className="profile">
      {(openSidebar)===true ? <Sidebar /> : ""}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/drnithiya.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Dr. Nithiya Nadar</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
