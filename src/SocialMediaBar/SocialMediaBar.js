import React from 'react';
import './SocialMediaBar.css';
import facebook_50 from './icons/icons8-facebook-50.png'
import google_plus_50 from './icons/icons8-google-plus-50.png'
import instagram_50 from './icons/icons8-instagram-50.png'
import linkedin_50 from './icons/icons8-linkedin-50.png'
import pinterest_50 from './icons/icons8-pinterest-50.png'
import snapchat_50 from './icons/icons8-snapchat-50.png'
import twitter_50 from './icons/icons8-twitter-50.png'
import facebook_100 from './icons/icons8-facebook-100.png'
import google_plus_100 from './icons/icons8-google-plus-100.png'
import instagram_100 from './icons/icons8-instagram-100.png'
import linkedin_100 from './icons/icons8-linkedin-100.png'
import pinterest_100 from './icons/icons8-pinterest-100.png'
import snapchat_100 from './icons/icons8-snapchat-100.png'
import twitter_100 from './icons/icons8-twitter-100.png'

function SocialMediaBar() {

  const handle_link_to = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="SocialMediaBar">
      <img className="SocialMediaIcon" src={facebook_100} onClick={() => handle_link_to('https://facebook.com')}/>
      <img className="SocialMediaIcon" src={instagram_100} onClick={() => handle_link_to('https://instagram.com')}/>
      <img className="SocialMediaIcon" src={twitter_100} onClick={() => handle_link_to('https://twitter.com')}/>

      {/* <img className="SocialMediaIcon" src={facebook_50} />
      <img className="SocialMediaIcon" src={google_plus_50} />
      <img className="SocialMediaIcon" src={instagram_50} />
      <img className="SocialMediaIcon" src={linkedin_50} />
      <img className="SocialMediaIcon" src={pinterest_50} />
      <img className="SocialMediaIcon" src={snapchat_50} />
      <img className="SocialMediaIcon" src={twitter_50} /> */}

      {/* <button><img className="SocialMediaIcon" src={facebook_50} /></button>
      <button><img className="SocialMediaIcon" src={google_plus_50} /></button>
      <button><img className="SocialMediaIcon" src={instagram_50} /></button>
      <button><img className="SocialMediaIcon" src={linkedin_50} /></button>
      <button><img className="SocialMediaIcon" src={pinterest_50} /></button>
      <button><img className="SocialMediaIcon" src={snapchat_50} /></button>
      <button><img className="SocialMediaIcon" src={twitter_50} /></button> */}
    </div>
  );
}

export default SocialMediaBar;
