import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
import wall from "./pictures/backgrounds/wall2.jpg";

class Drinks extends React.Component {
  style = {
    backgroundImage: `url(${wall})`
  };

  render() {
    return (
      <div style={this.style} className="menu-background">
        {!this.props.desktop && (
          <div style={this.style} className="mobile-menu-back" />
        )}
        <MenuContainer>
          <Menu
            title="Beer"
            items={[
              {
                name: "Bottle – Asahi (22oz)",
                price: 7
              },
              {
                name: "Draft – Sapporo (12oz)",
                price: 4.75
              },
              {
                name: "Draft – Sapporo (Pint)",
                price: 6
              },
              {
                name: "Draft – Sapporo (Pitcher)",
                price: 20
              }
            ]}
          />

          <Menu
            title="Chu-Hi"
            items={[
              {
                name: "Calpico Hi",
                price: 8.5,
                description: "Pint Glass"
              },
              {
                name: "Lemon Hi",
                price: 8.5,
                description: "Pint Glass"
              },
              {
                name: "Oolong Hi",
                price: 8.5,
                description: "Pint Glass"
              },
              {
                name: "Ume-Shu Sour",
                price: 8.5,
                description: "Pint Glass"
              }
            ]}
          />
          <Menu title="Soft Drinks" items ={[          {
            name: "Ramune",
            price: 3.5
          },
          {
            name: "Iced Tea",
            price: 2.25
          },
          {
            name: "Lemonade",
            price: 2.25
          },
          {
            name: "Coke, Diet Coke, Sprite, Root Beer",
            price: 2.25
          },
          ]}/>
          <Menu title="Dessert" items ={[
                      {
                        name: "Sesame Balls (5pc)",
                        price: 4.23,
                      },
                      {
                        name: "Ice Cream",
                        price: 3.5,
                      },
                      {
                        name: "Taiyaki Ice Cream",
                        price: 6,
                        description: "(Ice Cream Flavors: Red bean, Green Tea, or Coconut)"
                      }]}/>
        </MenuContainer>
      </div>
    );
  }
}

export default Drinks;
