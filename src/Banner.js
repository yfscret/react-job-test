import './css/Banner.css';
import bannerImg from './images/banner.jpg';

function Banner() {
  return (
    <div id="banner">
      <img src={bannerImg} alt="banner" />
    </div>
  );
}

export default Banner;
