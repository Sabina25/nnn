import { useState} from 'react';
import styled from "styled-components";

import HomeImg from "../images/home.jpg";

import Typography from "./Typography";
import {Content, Fleur} from "./layout";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 260px;
  background-image: url(${HomeImg});
`;

const Box = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;

const LinkButton = styled.div.attrs({
    activeButton: false || true,
})`
  margin: 0 auto;
  width: fit-content;
  padding: 2px 14px;
  border-bottom: 1px solid  ${props =>  props.theme.colors.typography.gray};
  background: transparent;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.colors.background.white} ;
  }
`;

const TypographyLink = styled(Typography)`
    cursor: pointer;
`;


const Serving = () => {
    const [active, setActive] = useState(false);

    const handleOnMouseEnter = () => {
        setActive(true)
    }

    const handleOnMouseLeave = () => {
        setActive(false)
    }

    return (
        <Wrapper>
            <Fleur>
                <Content>
                    <Box>
                        <Typography color='white' size="20px" fontWeight={600} textAlign="center">Serving in All Areas of Law</Typography>
                        <Typography color='gray' size="13px" textAlign="center">Aksan has departments consisting of lawyers who are experts in their fields in order to respond to Turkey's developing and world-integrating economy and to the diversified service demands.</Typography>
                        <LinkButton onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} activeButton={active}>
                            <TypographyLink color={active ? 'dark' : 'gray'} size="13px" textAlign="center">See All Services</TypographyLink>
                        </LinkButton>
                    </Box>
                </Content>
            </Fleur>
        </Wrapper>
    )
};

export default Serving;