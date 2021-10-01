import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { Caption2, SmallText } from '@styles/TextStyles'

export default function PurchaseButton({ title, subtitle }) {
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || 'Get Pro Access'}</Title>
          <Subtitle>{subtitle || '$19 per month'}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #fefefe 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgb(8 8 8 / 0.1), 0px 20px 40px rgb(23 0 102 / 0.2),
    inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.5);
  border-radius: 20px;
  display: flex;
  gap: 24px;
  align-items: center;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgb(8 8 8 / 0.1), 0px 30px 60px rgb(23 0 102 / 0.5),
      inset 0px 0px 0px 0.5px rgb(255 255 255 / 0.5);
    transform: translateY(-3px);
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 6px;

  ${Wrapper}:hover & {
    filter: hue-rotate(8deg);
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
  margin: 0;

  ${Wrapper}:hover & {
    transform: scale(1.1);
  }
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  margin: 0;
  max-width: initial;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.1) translate(0.5px, 2.3px);
  }
`

const Title = styled(Caption2)`
  color: #080808;
  margin: 0;
`

const Subtitle = styled(SmallText)`
  color: #080808;
  opacity: 0.7;
  margin: 0;
`
