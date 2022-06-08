import {useState} from 'react';
import styled from "styled-components";
import BurgerToggle from "./BurgerMenu.BurgerToggle";

const Box = styled.div`
  width: 35px;
  height: 35px;
`;

const BurgerMenu = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <BurgerToggle open={open} setOpen={setOpen} isClip={props.isClip}/>
        </Box>
    )
}

export default BurgerMenu;