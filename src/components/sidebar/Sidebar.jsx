import "./sidebar.css"
import AboutImg from "../../img/aboutMe.JPG"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">about me</span>
            {/* <img src={AboutImg} alt="" /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil sunt voluptate distinctio exercitationem consectetur,</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Games</li>
                <li className="sidebarListItem">Stuff</li>
                <li className="sidebarListItem">Other Stuff</li>
                <li className="sidebarListItem">More Stuff</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">follow</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-tumblr"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-solid fa-square-envelope"></i>
            </div>
        </div>
    </div>
  )
}
