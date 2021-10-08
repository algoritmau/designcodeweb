import React from 'react'
import styled from 'styled-components'

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup mockup--1" />
      <div className="mockup mockup--2" />
      <div className="mockup mockup--3" />
      <div className="mockup mockup--4" />
      <div className="mockup mockup--5" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 1000;

  @media (max-width: 768px) {
    transform: scale(0.8);
    transform-origin: left;
  }

  @media (max-width: 450px) {
    transform: scale(0.4);
    transform-origin: left;
  }

  * {
    transition: var(--transition);
  }

  :hover .mockup {
    transform: rotateY(360deg) rotateX(0deg);

    &.mockup--1 {
      transform: translate(-32px, -32px);
    }

    &.mockup--2 {
      transform: translate(0, -32px);
    }

    &.mockup--3 {
      transform: translate(-32px, -32px);
    }

    &.mockup--4 {
      transform: translate(-128px, 32px);
    }

    &.mockup--5 {
      transform: translate(-96px, 32px);
    }

    :hover {
      filter: brightness(160%) saturate(128%);
    }
  }

  .mockup--1,
  .mockup--2,
  .mockup--3,
  .mockup--4,
  .mockup--5 {
    position: absolute;
    backdrop-filter: blur(var(--backdrop-blur));
    border-radius: 16px;
    transform: rotateY(332deg) rotateX(12deg);
    transform-origin: bottom left;

    @media (max-width: 768px) {
      transform: rotateY(358deg) rotateX(4deg);
      transform-origin: left;
    }
  }

  .mockup--1 {
    top: 0;
    left: 0;
    width: 183px;
    height: 120px;

    background: url('/images/animations/mockup1.svg'),
      radial-gradient(
        218.5% 281.1% at 100% 100%,
        rgb(253 63 51 / 0.6) 0%,
        rgb(76 0 200 / 0.6) 45.83%,
        rgb(76 0 200 / 0.6) 100%
      );
    box-shadow: 0px 16.4px 32.8px rgb(99 30 187 / 0.5),
      inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.2);
  }

  .mockup--2 {
    top: 0;
    left: 214px;
    width: 183px;
    height: 120px;

    background: url('/images/animations/mockup2.svg'),
      linear-gradient(198.85deg, #4316db 12.72%, #9076e7 54.49%, #a2eeff 100%);
    box-shadow: 0px 18.2px 16.4px rgb(8 8 8 / 0.1),
      0px 16.4px 32.8px rgb(8 8 8 / 0.16),
      inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.2);
  }

  .mockup--3 {
    top: 60px;
    left: 37px;
    width: 601px;
    height: 428px;

    background: url('/images/animations/mockup3.svg'), rgb(23 12 61 / 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.2);

    border-radius: 8px;
  }

  .mockup--4 {
    top: 272px;
    left: 194px;
    width: 399px;
    height: 274px;

    background: url('/images/animations/mockup4.svg'), rgb(39 20 62 / 0.3);
    box-shadow: var(--inset-white-box-shadow);

    border-radius: 8px;
  }

  .mockup--5 {
    top: 262px;
    left: 616px;
    width: 412px;
    height: 274px;

    background: url('/images/animations/mockup5.svg'), rgb(39 20 62 / 0.2);
    box-shadow: var(--inset-white-box-shadow);

    border-radius: 8px;
  }
`
