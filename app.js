import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Kaveri</h1>;
<h1 id="jsxHeading2">Heading from JSX!!</h1>;
<h1>welcome</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>HARSHU</li>
        <li>SATYA</li>
        <li>TEJA</li>
      </ul>
      <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
      <br/>
      <br/>
      <button>click me</button>
    </div>
   
);
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(jsxHeading);



//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const K = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
        "h2",
        {
          key: "h2",
        },
        "This is h2 Tag"
      ),
      React.createElement(
        "h3",
        {
          key: "h3",
        },
        "This is h3 Tag"
      )
  ]
);
//Creat the same elemnent using JSX
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
//Create a functional component of the same with JSX
const A = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
//pass attributes into the tag in JSX
const V = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
//Composition of component (add a component inside another)

const AnotherComponent = function(){
  return <h2> This is Another Component</h2>
}

const E = () => {
return (
  <div className="Title" key="title">
    <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
    <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
    <AnotherComponent/>
    <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
  </div>
);
};
//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
//Create a Header Component from scratch using Functional Component with JSX
//Add a Logo on Left
//Add a search bar in middle
//Add User icon on right
//Add CSS to make it look nice
const R = () => {
  return(
      <>
      <header className="header">
          <div className="left">
              <img src={logo} alt="Logo" />
          </div>
          <div className="center">
              <input className="input" type="text" placeholder="Search anything you want..."/>
              <button type="submit">Submit</button>
          </div>
          <div className="right">
              <img src={userIcon} alt="User Icon"/>
          </div>
      </header>
      </>
  )
}