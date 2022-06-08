import styled from 'styled-components';

import Typography from "./Typography";
import {Content} from './layout'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.background.white};
`;


const Box = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTypography = styled(Typography)`
  letter-spacing: 2px;
  text-align: center;
`;

const AboutUs = () => {
    return (
        <Wrapper id="aboutUs">
            <Content>
                <Box>
                    <StyledTypography color="red" size="20px" fontWeight={600} textAlign="center">About Us</StyledTypography>
                    <Typography color="dark" size="13px" textAlign="center">People of Aksan are expert in a wide range of legal areas and highly proficient in their particular area of practice, also they provided organized and competent solutions to the legal issues. Aksan aims to provide the best legal services to its respectable clients together with the law offices and professional organisations around the world.</Typography>
                </Box>
            </Content>
        </Wrapper>
    );
};

export default AboutUs;