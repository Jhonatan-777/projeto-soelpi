import styled from "styled-components";

import { containerStyles } from "../../assets/styles/SharedStyles";

import bgPerson from "../../assets/img/background/bg-person.png";


export const WordContainer = styled.div`
  width: 100%;
  padding: 10% 0;
  padding-top: 70px;
  background: url(${bgPerson});
  background-size: cover;
`
export const LimitContainer = styled.div`
  ${containerStyles}
`

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 120px;
  
  & .title{
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.family.messi};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xxl};
    color: ${({ theme }) => theme.colors.white};
  }
  
  & .title-detail{
    object-fit: cover;
    width: 500px;
  }
`
export const ContainerSlide = styled.div`
  position: relative;
  width: 100%;
  height: 960px;
  padding: 50px;
  background-color: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;

  & #slide {
    width: max-content;
    margin-top: 50px;

  & .item {
    width: 200px;
    height: 300px;
    background-position: 50% 50%;
    display: inline-block;
    transition: 0.5s;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 20px;
    box-shadow: 0 30px 50px #505050;
  }
    & .item:nth-child(1),
    & .item:nth-child(2) {
      left: 0;
      top: 0;
      transform: translate(0, 0);
      border-radius: 0;
      width: 100%;
      height: 100%;
      box-shadow: none;
    }
    & .item:nth-child(3) {
      left: 50%;
    }
    & .item:nth-child(4) {
      left: calc(50% + 220px);
    }
    & .item:nth-child(5) {
      left: calc(50% + 440px);
    }
    & .item:nth-child(n + 6) {
      left: calc(50% + 660px);
      opacity: 0;
    }
    & .item .content {
      position: absolute;
      top: 50%;
      left: 100px;
      width: 300px;
      text-align: left;
      padding: 0;
      color: #eee;
      transform: translate(0, -50%);
      display: none;
      font-family: system-ui;
    }
    & .item:nth-child(2) .content {
      display: block;
      z-index: 111111;
    }
    & .item .name {
      font-size: 40px;
      font-weight: bold;
      opacity: 0;
      animation: showcontent 1s ease-in-out 1 forwards;
    }
    & .item .des {
      margin: 20px 0;
      opacity: 0;
      animation: showcontent 1s ease-in-out 0.3s 1 forwards;
    }
    & .item button {
      padding: 10px 20px;
      border: none;
      opacity: 0;
      animation: showcontent 1s ease-in-out 0.6s 1 forwards;
    }
  }


@keyframes showcontent {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
    filter: blur(0);
  }
}

`
export const BtnsContainer = styled.div`
  position: absolute;
  left: 200px;
  bottom: 100px;
  z-index: 222222;
  display: flex;
  gap: 40px;
  
    & button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #555;
    transition: 0.5s;
      
      & img{
        width: 100%;
        height: 100%;
      }
    }
    & button:hover {
    background-color: #bac383;
    }

`