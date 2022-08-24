import styled from 'styled-components';
import HomeSVG from '../img/SVGs/HomeSVG';
import AboutSVG from '../img/SVGs/AboutSVG';
import MailSVG from '../img/SVGs/SendMail';
import WebsiteSVG from '../img/SVGs/WebsiteSVG';
import profilePic from '../img/profile-pic.jpeg';
import SkillsSVG from '../img/SVGs/SkillsSVG';
import Facebook from '../img/SVGs/Facebook';
import Instagram from '../img/SVGs/Instagram';
import Github from '../img/SVGs/Github';
import { Link } from 'react-router-dom';
import { colorBlack, colorSand, colorWhite } from '../helpers/colors';
import {device} from '../helpers/screenSizes';

export default function Navigation(props){
  const {hideHamburger} = props;

  return (
    <Wrapper>
      <HeroImage> 
        <Link to='/' style={{textDecoration: 'none'}}>
          <Profile />
        </Link> 
        <Name>Shaun Pickett</Name>
        <p style={{fontSize: '0.8rem'}}>Novice Developer</p>
        <p style={{fontSize: '0.8rem', lineHeight: '0rem', margin: '0rem'}}>0412 220 332</p>
      </HeroImage>

      <NavigationPane>
        <UnorderedList>
          <Link to='/' style={{textDecoration: 'none'}} onClick={hideHamburger}>
            <ListItem>
              <HomeSVG  />
                Home
            </ListItem>
          </Link>

          <Link to='/about' style={{textDecoration: 'none'}} onClick={hideHamburger}>
            <ListItem>
              <AboutSVG  />
                About
            </ListItem>
          </Link>

          <Link to='/Projects' style={{textDecoration: 'none'}} onClick={hideHamburger}>
            <ListItem>
              <WebsiteSVG />
                Projects
            </ListItem>
          </Link>

          <Link to='/skills' style={{textDecoration: 'none'}} onClick={hideHamburger}>
            <ListItem>
              <SkillsSVG />
                Skills
            </ListItem>
          </Link>

          <Link to='/contact' style={{textDecoration: 'none'}} onClick={hideHamburger}>
            <ListItem>
              <MailSVG  />
                Contact
            </ListItem>
          </Link>

        </UnorderedList>
      </NavigationPane>

      <Footer>
        <FootList><Facebook /></FootList>
        <FootList><Github /></FootList>
        <FootList><Instagram /></FootList>
      </Footer>

    </Wrapper>
  )

}


const Wrapper = styled.div`
  height: 100%;
  background-color: hsl(40, 3%, 17%);
  display: flex;
  flex-direction: column;
`;
const HeroImage = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  ${device.mobile}{
    padding-top: 2rem;
  }
`;
const Profile = styled.div`
  width: 11em; 
  height: 11em; 
  border-radius: 50%;
  border: 2px solid ${colorWhite};
  background-image: url(${profilePic});
  background-size: contain;
  background-repeat: no-repeat;
  ${device.laptopL} {
    width: 9rem; 
    height: 9rem; 
    margin-top: 1rem;
  }
  ${device.laptop} {
    width: 7.5rem; 
    height: 7.5rem; 
  }
  ${device.tablet} {
    width: 16em; 
    height: 16em; 
  }
  ${device.mobile} {
    width: 11rem; 
    height: 11rem; 
  }
`;
const Name = styled.h3`
  margin: 2rem 0 0 0 ;
  padding: 0;
  line-height: 0rem;
  font-size: 1.3rem;
`;
const NavigationPane = styled.div`
  width: 100%;
  height: 50%;
  max-height: 450px;
  padding-top: 1rem;
`;
const UnorderedList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 3rem 0 6rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  ${device.tablet} {
    margin-top: 5rem;
  }
  ${device.mobile} {
    padding-top: 5rem;
    margin-top: 1rem;
  }
`;
const ListItem = styled.li`
  height: 50px;
  width: 100%;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: ${colorSand};
    color: hsl(40, 3%, 17%);
    transition: all 0.1s ease-out;
    }
  ${device.laptop} {
    font-size: 1.1rem;
    }
  ${device.tablet} {
      text-align: center;
      justify-content: center;
      padding-left: 0;
      margin-bottom: 2rem;
      font-size: 3rem;
    }
  ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 0rem;
  }
`;
const Footer = styled.div`
  width: 100%;
  min-height: 12%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
`;
const FootList = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-top: 0.7rem;
  display: flex ;
  justify-content: center;
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  color: ${colorWhite};
  cursor: pointer; 
  transition: all .2s ease-in-out;

  &:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px ${colorWhite};
  transition: all .2s ease-in-out;
  }
  &:hover {
    background-color: ${colorSand}; 
  }
  &:hover:after {
    opacity: 1;  
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
  }
  &:hover svg {
    stroke: ${colorBlack};
  }
`;