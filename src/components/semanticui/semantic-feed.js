var React = require('react');
import './semantic-feed.less';
import './semantic-image.less';

var semanticFeed = function statelessFunctionComponentClass(props) {
    return (
      <div className="ui feed">
  <div className="event">
    <div className="label">
      <img src="./assets/people/13.jpg" />
    </div>
    <div className="content">
      <div className="summary">
        <a className="user">
          Elliot Fu
        </a> added you as a friend
        <div className="date">
          1 Hour Ago
        </div>
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> 4 Likes
        </a>
      </div>
    </div>
  </div>
  <div className="event">
    <div className="label">
      <img src="./assets/people/14.jpg" />
    </div>
    <div className="content">
      <div className="summary">
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div className="date">
          4 days ago
        </div>
      </div>
      <div className="extra images">
        <a><img src="http://placehold.it/300x200" /></a>
        <a><img src="http://placehold.it/300x200" /></a>
      </div>
    
    </div>
  </div>
  <div className="event">
    <div className="label">
      <img src="./assets/people/15.jpg" />
    </div>
    <div className="content">
      <div className="summary">
        <a className="user">
          Jenny Hess
        </a> added you as a friend
        <div className="date">
          2 Days Ago
        </div>
      </div>
     
    </div>
  </div>
 
  <div className="event">
    <div className="label">
      <img src="./assets/people/16.jpg" />
    </div>
    <div className="content">
      <div className="summary">
        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
       
      </div>
      <div className="extra images">
        <a><img src="http://placehold.it/300x300"/></a>
        <a><img src="http://placehold.it/300x300"/></a>
      </div>
      
    </div>
  </div>
</div>
      //<button onClick={props.onClick} className={`ui button ${props.type}`}>{props.text}</button>
  );
};
 
module.exports = semanticFeed;