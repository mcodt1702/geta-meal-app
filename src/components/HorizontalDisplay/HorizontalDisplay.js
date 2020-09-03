import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Horizontal.css";

import { Link } from "react-router-dom";

const list = [
  { name: "item1", image: "/images/pasta.jpg" },
  { name: "item2", image: "/images/pizza.jpg" },
  {
    name: "item3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
  },
  { name: "item4", image: "/images/pasta.jpg" },
  { name: "item5", image: "/images/pasta.jpg" },
  { name: "item6", image: "/images/pasta.jpg" },
  { name: "item7", image: "/images/pasta.jpg" },
  { name: "item8", image: "/images/pasta.jpg" },
  { name: "item9", image: "/images/pasta.jpg" },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, image, selected }) => {
  return (
    <div className={`menu-item ${selected ? "active" : ""}`}>
      <Link to={`/dish/${text}`}>
        <img src={image} alt={text} height="150" />
      </Link>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name, image } = el;

    return (
      <MenuItem text={name} key={name} image={image} selected={selected} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

export default class Horizontal extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="horizontal">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
