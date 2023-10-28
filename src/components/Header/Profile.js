import bea from './bea.png';
import anne from './anne.png';
import mason from './mason.png';
import profile from './profile.css';
function Profile(){
    return(
        <>
        <div className="main-profile">
          <img src={anne} alt="Current Profile" />
          <span />
        </div>
        <div className="complement">
          <div className="callout-arrow" />
        </div>
        <div className="dropdown">
          <ul>
            <li>
              <img src={bea} alt="Other Profile 1" />
              <span>Akshay</span>
            </li>
            <li>
              <img src={mason} alt="Other Profile 2" />
              <span>Bhosale</span>
            </li>
            <li>
              <span>Manage profiles</span>
            </li>
          </ul>
          <div className="kids">
            <a href="#">Kids</a>
          </div>
          <div className="options">
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}export default Profile;