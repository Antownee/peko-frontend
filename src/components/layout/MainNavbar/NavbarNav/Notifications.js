import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { switchLanguageActions } from "../../../../redux/actions"
import { connect } from "react-redux";

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.onSelectFlag = this.onSelectFlag.bind(this);
  }

  onSelectFlag(countryCode) {
    //set language to the selected one
    let code = countryCode === "IR" ? "fa" : "en";
    this.props.dispatch(switchLanguageActions.setLanguage(code));
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <ReactFlagsSelect
        countries={["GB", "IR"]}
        placeholder="Select Language"
        showSelectedLabel={true}
        showOptionLabel={false}
        selectedSize={14}
        optionsSize={14}
        showSelectedLabel={false}
        onSelect={this.onSelectFlag}
        defaultCountry="GB" />

    );
  }
}

export default connect()(Notifications);
