import styled from 'styled-components';
import HomeSVG from '../img/SVGs/HomeSVG';
import AboutSVG from '../img/SVGs/AboutSVG';
import MailSVG from '../img/SVGs/SendMail';
import WebsiteSVG from '../img/SVGs/WebsiteSVG';
import profilePic from '../img/profile-pic.jpeg';
import Facebook from '../img/SVGs/Facebook';
import Instagram from '../img/SVGs/Instagram';
import Github from '../img/SVGs/Github';
import { Link } from 'react-router-dom';
import { colorBlack, colorSand, colorWhite } from '../helpers/colors';

export default function Navigation(){


  return (
    <Wrapper>
      <HeroImage> 
        <Profile />
        <Name>Shaun Pickett</Name>
        <p style={{fontSize: '0.8rem'}}>Novice Developer</p>
      </HeroImage>

      <NavigationPane>
        <UnorderedList>
          <Link to='/' style={{textDecoration: 'none'}}>
            <ListItem>
              <HomeSVG />
                Home
            </ListItem>
          </Link>

          <Link to='/about' style={{textDecoration: 'none'}}>
            <ListItem>
              <AboutSVG />
                About
            </ListItem>
          </Link>

          <Link to='/Websites' style={{textDecoration: 'none'}}>
            <ListItem>
              <WebsiteSVG />
                Apps
            </ListItem>
          </Link>

          <Link to='/contact' style={{textDecoration: 'none'}}>
            <ListItem>
              <MailSVG />
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
`;
const HeroImage = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const Profile = styled.div`
  width: 8em; 
  height: 8em; 
  margin-top: 1rem;
  border-radius: 50%;
  border: 2px solid ${colorWhite};
  background-image: url(${profilePic});
  background-size: contain;
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

  &:hover {
    background-color: ${colorSand};
    color: hsl(40, 3%, 17%);
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const FootList = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
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
    background-color: ${colorWhite}; 
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
