import styled from 'styled-components';
import {useMedia} from "react-use";
import {Scrollchor} from 'react-scrollchor';

import Typography from "./Typography";

import {Content, Fleur} from "./layout";

import HeroImg from '../images/hero.jpeg';
import ArrowImg from '../images/arrowDown.png';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${HeroImg});
  background-position: center;
`;

const Box = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  padding: 50% 10px 0;
`;

const TextBox = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 40px;
`;

const Title = styled(Typography)`
  font-family: "abril-text";
  line-height: 44px;
`;

const StyledScrollchor = styled(Scrollchor)`
  align-self: end;
  justify-self: center;
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
`;

const Hero = () => {
    const isNotMob = useMedia('(min-width: 768px)');

    return (
        <Wrapper>
            <Fleur>
                <Content>
                    <Box>
                        <TextBox>
                            <Title size="28px" color="white" textAlign="center" fontWeight={400}>Locally Powerful, Regionally Influential, Globally Prestigious</Title>
                            {isNotMob && <Typography size="14px" color="white" textAlign="center" fontWeight={400}>Aksan is an independent law firm based in Turkey. Aksan represent clients including international investors and domestic companies in Turkey, the Middle East, Central Asia, North Africa and the UK.</Typography>}
                        </TextBox>
                        <StyledScrollchor to='aboutUs'>
                            <Arrow src={ArrowImg} />
                        </StyledScrollchor>
                    </Box>
                </Content>
            </Fleur>
        </Wrapper>
    );
};

export default Hero