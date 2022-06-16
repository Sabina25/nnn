import {useState} from 'react';
import {useLockBodyScroll} from 'react-use';
import styled from "styled-components";

import BurgerToggle from "./BurgerMenu.BurgerToggle";

const Box = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 5;
  width: 35px;
  height: 35px;
`;

const Menu = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(27, 22, 28, 0.95);
  overflow: hidden;
  
  @media(min-width: 768px){
    width: 70vw;
  }
`;

const BurgerMenu = (props) => {
    const [open, setOpen] = useState(false);

    useLockBodyScroll(open);

    return (
        <>
            <Box>
                <BurgerToggle open={open} setOpen={setOpen} isClip={props.isClip}/>
            </Box>
            {open && (
                <Menu>

                </Menu>
            )}
        </>
    )
};

export default BurgerMenu;