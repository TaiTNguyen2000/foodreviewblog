import Link from 'next/link';
import Router from 'next/router';

const Footer = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          height: '120px',
          width: '80%',
          fontSize: '50px',
          backgroundColor: '#fff',
        }}
      >
        <a href='https://www.facebook.com/'>
          <i class='fab fa-facebook-square'></i>
        </a>
        <a href='https://www.instagram.com/'>
          <i class='fab fa-instagram'></i>
        </a>
        <a href='https://www.twitter.com/'>
          <i class='fab fa-twitter'></i>
        </a>
        <a href='https://www.youtube.com/'>
          <i class='fab fa-youtube'></i>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Footer;
