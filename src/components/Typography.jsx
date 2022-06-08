import styled from 'styled-components';

const StyledTypography = styled.p`
            font-family: ${props => props.font ? props.font : 'sans-serif'};
            font-size: ${props => props.size ? props.size : '12px'};
            font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
            text-align: ${props => props.textAlign ? props.textAlign : 'left'};
            white-space: ${props => props.wrap};
            text-transform: ${props => props.textTransform};
            color: ${props => props.color ? props.theme.colors.typography[`${props.color}`] : props.theme.colors.typography.white};
            text-decoration: ${props => props.textDecoration ? props.textDecoration : 'auto'};

            & span {
                font-weight: 600;
            }
    `
;

const Typography = (props) => {
    return (
        <StyledTypography
            className={props.className}
            color={props.color}
            font={props.font}
            fontWeight={props.fontWeight}
            size={props.size}
            textAlign={props.textAlign}
            textTransform={props.textTransform}
            wrap={props.wrap}
            onClick={props.onClick}
            textDecoration={props.textDecoration}
        >
            {props.children}
        </StyledTypography>
    );
};

export default Typography;