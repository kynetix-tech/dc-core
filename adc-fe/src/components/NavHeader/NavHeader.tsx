import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import {
  FlexBox,
  NavAppBar,
  NavContainer,
  NavLogoBox,
  NavLogoText,
  PopoverButton,
  PopoverContainer,
  VerticalPopover,
} from './NavHeader.style';

export default function NavHeader() {
  const { isAuthenticated, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <NavAppBar $isAuthenticated={true}>
      <Toolbar>
        <NavContainer>
          <FlexBox>
            <FlexBox>
              <NavLogoBox />
              <NavLogoText>ADC.UA</NavLogoText>
            </FlexBox>
            {isAuthenticated && (
              <FlexBox>
                <IconButton>
                  <ViewCompactIcon />
                </IconButton>
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
                <>
                  <IconButton aria-describedby={id} onClick={handleClick}>
                    <AccountCircleIcon />
                  </IconButton>
                  <VerticalPopover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                  >
                    <PopoverContainer>
                      <Typography variant='button'>ADC.username</Typography>
                      <Divider orientation='horizontal' variant='middle' flexItem />
                      <PopoverButton
                        startIcon={<LogoutIcon />}
                        onClick={() => {
                          logout({ logoutParams: { returnTo: window.location.origin } });
                        }}
                      >
                        Logout
                      </PopoverButton>
                    </PopoverContainer>
                  </VerticalPopover>
                </>
              </FlexBox>
            )}
          </FlexBox>
        </NavContainer>
      </Toolbar>
    </NavAppBar>
  );
}
