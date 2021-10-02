import React from 'react'
import styled from 'styled-components'

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .mockup1,
  .mockup2,
  .mockup3,
  .mockup4,
  .mockup5 {
    position: absolute;
    backdrop-filter: blur(var(--backdrop-blur));
    border-radius: 16px;
  }

  .mockup1 {
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

  .mockup2 {
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

  .mockup3 {
    top: 60px;
    left: 37px;
    width: 601px;
    height: 428px;

    background: url('/images/animations/mockup3.svg'), rgb(23 12 61 / 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.2);

    border-radius: 8px;
  }

  .mockup4 {
    top: 272px;
    left: 194px;
    width: 399px;
    height: 274px;

    background: url('/images/animations/mockup4.svg'), rgb(39 20 62 / 0.3);
    box-shadow: var(--inset-white-box-shadow);

    border-radius: 8px;
  }

  .mockup5 {
    top: 262px;
    left: 616px;
    width: 412px;
    height: 274px;

    background: url('/images/animations/mockup5.svg'), rgb(39 20 62 / 0.2);
    box-shadow: var(--inset-white-box-shadow);

    border-radius: 8px;
  }
`
