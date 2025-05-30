import Image from 'react-bootstrap/Image';
import './Aboutpage.css';

function LogoItem({ src, alt, label }) {
  return (
    <div className="logo-item">
      {src && <Image className="logoImage" src={src} alt={alt} />}
      <div className="logo-label">{label}</div>
    </div>
  );
}

export default LogoItem;
