import {useState, useCallback, useEffect} from 'react';
import styled from "styled-components";
import {Scrollchor} from 'react-scrollchor';
import {useWindowScroll} from 'react-use';

import BurgerMenu from "./Header.BurgerMenu";
import LogoImg from '../images/log.png';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 60px;
  padding: 2px 15px;
  background: ${({ isClip }) => isClip ? '#FFFFFF' : 'transperent'};
  box-shadow: ${({ isClip }) => isClip  ? '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)' : ''};
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

const StyledScrollchor = styled(Scrollchor)`
    align-self: center;
`;

const Logo = styled.img`
  height: 32px;
`;

const Menu = styled.div``;

const Header = () => {
    const [isClip, setClip] = useState(false);

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
                <Menu>
                    <BurgerMenu isClip={isClip}/>
                </Menu>
            </Box>
        </Wrapper>
    );
}

export default Header;