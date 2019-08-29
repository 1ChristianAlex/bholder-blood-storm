import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';
import { SocialIcon } from './styled';

export const SocialHeader = () => {
  return (
    <SocialIcon.container>
      <SocialIcon.item href="#">
        <FaFacebookSquare />
      </SocialIcon.item>
      <SocialIcon.item href="#">
        <FaInstagram />
      </SocialIcon.item>
      <SocialIcon.item href="#">
        <FaTwitch />
      </SocialIcon.item>
      <SocialIcon.item href="#">
        <FaYoutube />
      </SocialIcon.item>
    </SocialIcon.container>
  );
};
