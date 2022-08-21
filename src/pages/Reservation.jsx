import React from 'react';
import styled from 'styled-components';

import { SEO } from '../components/container/SEO';
import { Header } from '../components/header/Header';
import { ContainerC } from '../components/container/ContainerC';
import { Footer } from '../components/footer/Footer';

import Image from '../public/LINE_ALBUM_clinic_220301_7.jpg';

export const Reservation = () => {
  return (
    <>
      <SEO title={'SALON MEME Reservationページ'} />
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      {/* <ScrollReveal move="top"> */}
      <ContainerC
        title={'Reserve'}
        text={'こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは'}
        image={Image}
        widthRatio={100}
      />
      {/* </ScrollReveal> */}
      <Footer />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const SImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 200px;

  @media screen and (max-width: 600px) {
    height: 130px;
  }
`;
