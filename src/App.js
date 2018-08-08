import React, { Component } from "react";
import externalLinks from "./content/external.json";
import data from "./content/data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCareer: false,
      showProjects: false,
      showStack: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(n) {
    switch (n) {
      case 0:
        this.setState({ showCareer: !this.state.showCareer });
        this.state.showProjects && this.setState({ showProjects: false });
        this.state.showStack && this.setState({ showStack: false });
        break;
      case 1:
        this.setState({ showProjects: !this.state.showProjects });
        this.state.showCareer && this.setState({ showCareer: false });
        this.state.showStack && this.setState({ showStack: false });
        break;
      case 2:
        this.setState({ showStack: !this.state.showStack });
        this.state.showCareer && this.setState({ showCareer: false });
        this.state.showProjects && this.setState({ showProjects: false });
        break;
      default:
        break;
    }
  }
  render() {
    const bioLinks = externalLinks.data.map(e => (
      <p className="bio-links">
        <a href={`${e.url}`} target="_blank">{`${e.title}`}</a>
      </p>
    ));
    const technologies = data.techStack.languages.map(t => (
      <li className="bullet-info">
        <span className="bullet-highlights1">{`${t}`}</span>
      </li>
    ));

    const currentOrganisation = (
      <a
        className="current-org"
        href={`${externalLinks.currentOrganisation.url}`}
        target="_blank"
      >{`${externalLinks.currentOrganisation.title}`}</a>
    );

    const careerInfo = data.careerInfo.map((c, i) => (
      <li className="bullet-info">
        <span className="bullet-highlights1">{`${c.time}`}</span>
        <span className="bullet-highlights2">{`${c.company}`}</span>
        <span className="bullet-highlights3">{`${c.title}`}</span>
        <br />
        <span className="bullet-description" hidden="true">{`${
          c.Description
        }`}</span>
      </li>
    ));

    const projectInfo = data.projectInfo.map(p => (
      <li className="bullet-info">
        <span className="bullet-highlights1">
          <a href={`${p.url}`} target="_blank">{`${p.title}`}</a>
        </span>
      </li>
    ));

    return (
      <div className="App">
        <header className="App-body">
          <h1 className="App-title">Tejasvi Thota (Teja)</h1>
          <h2 className="App-sub-title">Polyglot Developer in London</h2>
          {bioLinks}
          <div className="App-intro">
            Hi, I'm Teja, working as a {externalLinks.currentOrganisation.role}{" "}
            at {currentOrganisation} 👨‍💻.
          </div>
          <div className="App-intro">{data.intro}</div>
          <div>
            <p
              className="bullet-heading"
              onClick={() => {
                this.handleOnClick(0);
              }}
            >
              [{this.state.showCareer ? "-" : "+"}] Career Updates
            </p>
            {this.state.showCareer && careerInfo}
          </div>
          <div>
            <p
              className="bullet-heading"
              onClick={() => {
                this.handleOnClick(1);
              }}
            >
              [{this.state.showProjects ? "-" : "+"}] Project Updates
            </p>
            {this.state.showProjects && projectInfo}
          </div>
          <div>
            <p
              className="bullet-heading"
              onClick={() => {
                this.handleOnClick(2);
              }}
            >
              [{this.state.showStack ? "-" : "+"}] Favourite Languages
            </p>
            {this.state.showStack && technologies}
          </div>
          <div className="App-intro">{data.end}</div>
        </header>
      </div>
    );
  }
}

export default App;
