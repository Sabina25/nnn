import {useState, useCallback, useEffect} from 'react';
import styled from "styled-components";
import {Scrollchor} from 'react-scrollchor';
import {useMedia, useWindowScroll} from 'react-use';

import BurgerMenu from "./Header.BurgerMenu";
import LogoImg from '../images/log.png';
import Typography from "./Typography";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 60px;
  padding: 2px 15px;
  background: ${({ isClip }) => isClip ? '#FFFFFF' : 'transperent'};
  box-shadow: ${({ isClip }) => isClip  ? '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)' : ''};
  
  @media(min-width: 1024px){
    height: 98px;
    padding: 0;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const StyledScrollchor = styled(Scrollchor)`
    align-self: center;

  @media(max-width: 1024px){
    padding-left: 20px;
  }
`;

const Logo = styled.img`
  height: 32px;
`;

const Menu = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;
  gap: 15px;
  padding: 10px 20px 0 0;

  @media(min-width: 1350px){
    height: 98px;
    padding: 10px 0 0 0;
  }
`;

const LanguagesList = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 20px;
`;

const MenuItem = styled(Typography)`
  letter-spacing: 1px;
  cursor: pointer;
`;

const Language = styled(Typography)`
    cursor: pointer;
`;

const Header = () => {
    const [isClip, setClip] = useState(false);

    const isDesktop = useMedia('(min-width: 1024px)')

    const handleClip = useCallback(() => {
        setClip(window.scrollY > 20);
    },[]);

    const { y } = useWindowScroll();

    useEffect(() => {
        if (y > 20) {
            setClip(true);
        }
    }, [y]);

    useEffect(() => {
        window.addEventListener('scroll', handleClip);
    return () => window.removeEventListener('scroll', handleClip);
    }, [handleClip]);


    return (
        <Wrapper isClip={isClip}>
            <Box>
                <StyledScrollchor>
                    <Logo src={LogoImg} />
                </StyledScrollchor>
                {isDesktop ? (
                    <Menu>
                        <LanguagesList>
                            <Language color={isClip ? 'dark' : "white"} size="11px">TÜRKÇE</Language>
                            <Language color="red" size="11px">ENGLISH</Language>
                            <Language color={isClip ? 'dark' : "white"} size="11px">日本語</Language>
                        </LanguagesList>
                        <NavMenu>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 1</MenuItem></Scrollchor>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 2</MenuItem></Scrollchor>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 3</MenuItem></Scrollchor>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 4</MenuItem></Scrollchor>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 3</MenuItem></Scrollchor>
                            <Scrollchor><MenuItem color={isClip ? 'dark' : "white"} size="15px">Block 4</MenuItem></Scrollchor>
                        </NavMenu>
                    </Menu>
                ) : (
                    <BurgerMenu isClip={isClip}/>
                )}
            </Box>
        </Wrapper>
    );
}

export default Header;