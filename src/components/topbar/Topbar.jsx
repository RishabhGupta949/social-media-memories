import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from 'react-router-dom';

// import { useState } from "react";


// const Sidebar = () =>{

//   const [opensidebar,setopensidebar] = useState(false);
// }

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
       <Link to="/"> <span className="logo">Memories</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/">
          <span className="topbarLink">Homepage</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
        <img src="/assets/person/avatar.png" alt="" className="topbarImg"/>
        </Link>
        <Link to="/login">
        <button className="btn">Logout</button>
        </Link>
      </div>
    </div>
  );
}
