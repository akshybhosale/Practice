import github from './github.svg';
import linkedln from './linkedln.svg';
import './FooterStyle.css';
function Footer(){
    return(
<>
<footer>
  <hr></hr>
  <div id= "footer-menu">
    <vr>
    <ul className='footer-menu1'>
    <li><a href="menu.js" target="_blank">footer</a></li>
    <li><a href='#'>footer</a></li>
    <li><a href='#'>footer</a></li>
    </ul>
    </vr>
    <vr>
    <ul className='footer-menu2'>
    <li><a href='#'>footer</a></li>
    <li><a href='#'>footer</a></li>
    <li><a href='#'>footer</a></li>
    </ul>
    </vr>
  </div>
   <hr></hr>
    <div className="socials">
        <a id="github" href="https://github.com/akshybhosale" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a id="linkedin" href="https://www.linkedin.com/in/akshay-bhosale-480a6b189/" target="_blank" rel="noreferrer">
          <img src={linkedln} alt="Linkedin" />
        </a>
      </div>
</footer>
</>
    );
}export default Footer;