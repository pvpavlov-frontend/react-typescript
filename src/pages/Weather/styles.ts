import { BgMain } from "assets";
import styled from "styled-components";

export const WeatherWraper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

export const WeatherInfo = styled.div`
  margin-top: 20px;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: url(${BgMain}) no-repeat top center / cover;    
`;

export const Header = styled.header`
   display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D2D2D2;
    background:linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0 %, rgba(255, 255, 255, 0.10) 100 %), rgba(18, 45, 77, 0.50);
     backdrop-filter: blur(8.899999618530273px);
    & h1 {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 26px 0px;
    }   
`;
export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    padding-top: 118px;
    @media only screen and (max-width: 767px) {
        padding: 50px 15px 0;
    }
`;
export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 710px;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
export const CityInput = styled.input`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 40px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(8px);
    padding: 12px 20px;
    width: 100%;
    max-width: 410px;
    margin-right: 14px;
    &:focus-visible,
    &:active,
    &:focus {
        outline: 0;
    }
    @media only screen and(max-width: 767px) {
        box-sizing: border-box;
        margin-right: 0;
        margin-bottom: 25px;
    }
`;
export const SearchButton = styled.button`
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 50px;
    background: linear-gradient(0deg, #3678B4 0%, #3678B4 100%), linear-gradient(270deg, #362A84 0.23%, #5936B4 94.2%), #4A319F;
    padding: 13px 40px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: deepskyblue;
    }
`;
export const Load = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
    width: 500px;
    font-size: 20px;
`;
export const InfoFlex = styled.div`
    flex: 0 0 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
`;
export const InfoItem = styled.div`
    &:nth-child(2) {
        flex: 1 0 0;
    }
    img {
        height: 100%;
    }
`;
export const InfoTemp = styled.p`
    color: #fff;
    font-size: 57px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const InfoCity = styled.p`
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
`;
export const WeatherInfoContainer = styled.div`
    width: 100%;
    max-width: 710px;
    margin-top: 80px;
    background: linear-gradient(134deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
    backdrop-filter: blur(4px);
    border-radius: 15px;
    padding: 16px 36px;
    box-sizing: border-box;
`;
export const WeatherErrorContainer = styled.div`
    width: 100%;
    max-width: 710px;
    margin-top: 80px;
    background: linear-gradient(134deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
    backdrop-filter: blur(4px);
    border-radius: 15px;
    padding: 16px 36px;
    box-sizing: border-box;
    flex-direction: column;
`;
export const ErrorTitle = styled.p`
    color: #F35E5E;
    text-align: center;
    font-size: 57px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const ErrorDesc = styled.p`
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;