import styled from "styled-components";

import { containerStyles } from "../../assets/styles/SharedStyles";

import bgPerson from "../../assets/img/background/bg-person.png";


export const PersonContainer = styled.div`
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
  margin-top: 60px;
  margin-bottom: 80px;
  
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
export const ContainerPersonDesc = styled.div`
  width: 100%;
  display: flex;
  
  & .container-box{
    border-radius: 50px;
    margin-left: 20px;
    margin-right: 20px;
    z-index: 1;
    position: relative;
    flex: 1;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.20), rgba(0, 163, 255, 0.40), rgba(0, 0, 0, 0.20));
    
    &::before{
      border-top-right-radius: 50px;
      z-index: -1;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.10);
    }
    
    & .container-img-princ{
      position: absolute;
      top: -30px;
      right: 5%;
      
      & .img-princ{
        width: 400px;
        height: 600px;
        box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.5);
        
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
export const BoxLeft = styled.div`
  position: relative;
  
  &::before {
    position: absolute;
    content: "";
    border-top-right-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 98%;
    width: 98%;
  }
  
  & .title-box-person{
    border-top-right-radius: 55px;
    background: linear-gradient(to right, rgba(19, 80, 145, 0.5), rgba(84, 156, 233, 0.3));
    padding: 20px 40px;
    
    & .title-name-person{
      font-family: ${({ theme }) => theme.family.messi};
      font-weight: ${({ theme }) => theme.weight.regular};
      font-size: ${({ theme }) => theme.sizes.xl};
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.5;
    }
    & .subtitle-name-person{
      font-family: ${({ theme }) => theme.family.pop};
      font-weight: ${({ theme }) => theme.weight.light};
      font-size: ${({ theme }) => theme.sizes.m};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  & .desc-box-person{
    padding: 20px 40px;
    
    & h3{
      font-family: ${({ theme }) => theme.family.messi};
      font-weight: ${({ theme }) => theme.weight.medium};
      font-size: ${({ theme }) => theme.sizes.m};
      color: ${({ theme }) => theme.colors.textColorLight};
      margin-bottom: 10px;
    }
    & .desc-person{
      position: relative;
      background: rgba(2, 35, 53, 0.377);
      overflow-y: scroll;
      scrollbar-color: #393b44 #cfcfcf5e;
      scrollbar-width: thin;
      height: 180px;
      padding: 20px;
      max-width: 55%;
      min-width: 550px;
      z-index: 100;
      
      & p{
        width: 60ch;
        font-family: ${({ theme }) => theme.family.robo};
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: ${({ theme }) => theme.sizes.xs};
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.white};
        letter-spacing: .11rem;
      }
    }
  }
  
  & .container-img-left{
    padding: 10px 40px 30px 40px;
    max-width: 500px;
    display: flex;
    gap: 30px;
    /* justify-content: space-between; */

    & .img-left{
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: aliceblue;
      width: 150px;
      height: 200px;
      overflow: hidden;
      
      & img{
        width: 200px;
        height: 220px;
      }
      
      & .desc-name-img{
        position: absolute;
        width: 100%;
        bottom: 0;
        background: #000000a2;
        transition: all .2s;
        
        & p{
          padding: 5px;
          text-align: center;
          font-family: ${({ theme }) => theme.family.pop};
          font-weight: ${({ theme }) => theme.weight.medium};
          font-size: ${({ theme }) => theme.sizes.m};
          color: ${({ theme }) => theme.colors.white};
          letter-spacing: .13rem;
          transition: all .2s;
        }
      }
      
      &:hover .desc-name-img{
      background: #f0f0f0a1;
      
        & p{
          padding: 10px;
          color: #3a3a3a;
        }
      }
    }
  }
`
export const BtnLR = styled.div`
  width: 45px;
  height: 60px;
  align-self: flex-end;
  margin-bottom: 120px;
  
  & img{
    width: 100%;
    height: 100%;
  }
`