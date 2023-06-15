import './css/Header.css';
import logo from './images/logo.svg';
import educationImg from './images/education.svg';
import healthImg from './images/health.svg';
import arrowIconImg from './images/arrowIcon.svg';
import searchIconImg from './images/searchIcon.svg';
import uploadIconImg from './images/uploadIcon.svg';
import navIcon from './images/navIcon.svg';

function Header() {
  return (
    <header>
      <div className="up">
        <NavIcon />
        <Logo />
        <SearchBar />
        <Link />
      </div>
      <div className="down">
        <HeaderButton />
      </div>
    </header>
  )
}

function NavIcon() {
  return (
    <div className="navIcon">
      <img src={navIcon} alt="" />
    </div>
  )
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  )
}

function SearchBar() {
  return (
    <form className="searchBar">
      <input type="text" placeholder="Search" />
      <button type="submit"><img src={searchIconImg} /></button>
    </form>
  )
}
function Link() {
  return (
    <div className="link">
      <a href="/" className="headerLink"><span><img src={uploadIconImg} className="uploadIconImg" /></span><span>Upload</span></a>
      <a href="/" className="headerLink">Login</a>
      <a href="/" className="headerLink">Signup</a>
    </div>
  )
}
function HeaderButton() {
  return (
    <div className="headerButtonDiv">
      <a href="/" className="headerButton">For&nbsp;you</a>
      <a href="/" className="headerButton activeHeaderButton"><span><img src={educationImg} /></span><span>Education</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Health&nbsp;&&nbsp;Medicine</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Technology</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Business</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Engineering</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Science</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Healthcare</span></a>
      <a href="/" className="headerButton"><span><img src={healthImg} /></span><span>Design</span></a>
      <a href="/" className="arrowIcon"><img src={arrowIconImg} /></a>
    </div>
  )
}
export default Header;
