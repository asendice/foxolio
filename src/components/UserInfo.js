import React from 'react';
import fox from '../images/fox.png';


const UserInfo = ({portTotal}) => {

  return(
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <a href="img" className="ui small rounded image">
            <img alt="user pic" src={fox} />
          </a>
          <div className="content center aligned">
            <h4 className="ui header center aligned">fox portfolio</h4>
            <div className="description">
              <div className="ui statistic center aligned">
                <div className="value">
                 ${portTotal}
                </div>
                <div className="label center aligned"> 
                  esitmated total
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}


export default UserInfo;