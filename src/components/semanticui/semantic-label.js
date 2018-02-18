var React = require('react');
import './semantic-label.less';
import {
Icon
} from 'antd'
var SemanticLabel = function statelessFunctionComponentClass(props) {
    return (
      //<button onClick={props.onClick} className={`ui button ${props.type}`}>{props.text}</button>
      <div className={`ui label ${props.type}`}>
      <Icon type={props.icon}/>{props.text}
       <a className="detail" href={props.link}>{props.linkTitle}</a>
      </div>
  );
};

var SemanticImageLabel = function statelessFunctionComponentClass(props) {
    return (
      //<button onClick={props.onClick} className={`ui button ${props.type}`}>{props.text}</button>
      <div>
      <a className={`ui image label ${props.type}`} href={props.link}><img src={props.src}/>{props.text}  <div className="detail">{props.detailText}</div></a>
      </div>
  );
};
 
module.exports = {SemanticLabel,SemanticImageLabel};