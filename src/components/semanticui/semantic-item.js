var React = require('react');
import './semantic-item.less';
import './semantic-image.less';

var SemanticItem = function statelessFunctionComponentClass(props) {
    return (
      <div className="ui fluid divided items">
      <div className="item">
        <div className="ui tiny image">
          <img src="./assets/people/17.jpg" />
        </div>
        <div className="content">
          <a className="header">Anne Campbell</a>
          <div className="meta">
            <span>Organizator</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
            anne.campbell@example.com
          </div>
        </div>
        </div>
        <div className="item">
        <div className="ui tiny image">
          <img src="./assets/people/18.jpg" />
        </div>
        <div className="content">
          <a className="header">Peyton Torres</a>
          <div className="meta">
            <span>Lawyer</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
           peyton.torres46@example.com
          </div>
        </div>
        </div>
        <div className="item">
        <div className="ui tiny image">
          <img src="./assets/people/19.jpg" />
        </div>
        <div className="content">
          <a className="header">Harper Porter</a>
          <div className="meta">
            <span>Style Designer</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
           harper.porter24@example.com
          </div>
        </div>
        </div>
        <div className="item">
        <div className="ui tiny image">
          <img src="./assets/people/20.jpg" />
        </div>
        <div className="content">
          <a className="header">Ray Walker</a>
          <div className="meta">
            <span>Co-Producer</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
            ray.walker44@example.com
          </div>
        </div>
        </div>
      </div>
      //<button onClick={props.onClick} className={`ui button ${props.type}`}>{props.text}</button>
  );
};
 
module.exports = SemanticItem;