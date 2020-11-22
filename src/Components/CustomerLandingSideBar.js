import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './CustomerLandingSideBar.css'
import SidebarOption from './SidebarOption'
const CustomerLandingSideBar = () => {
    return (
        <div className="sidebar">
            <img
        src=""
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={StarBorderIcon} title="Wishlist" />
      <br />
      <strong className="sidebar__title">Your Orders</strong>
      <hr></hr>

      {/* {playlsits?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))} */}
        </div>
    )
}

export default CustomerLandingSideBar
