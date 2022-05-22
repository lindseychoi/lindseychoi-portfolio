import React from 'react';
import ProfilePic from '../../assets/blackandwhite-profilepic.jpg';

export default function Home() {
  return (
    <div>
      <img src={ProfilePic} className="profilepic" alt="picture of me" />
      <p>
        My Portfolio
      </p>
    </div>
  );
}
