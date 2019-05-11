import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import getSidebarNavItems  from "../../../data/sidebar-nav-items";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    const data = JSON.parse(localStorage.getItem("user"));
    const currentUser = data.data;

    const navbarItems = getSidebarNavItems(currentUser.role);

    this.state = {
      navItems: navbarItems
    };
  }

 
  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
