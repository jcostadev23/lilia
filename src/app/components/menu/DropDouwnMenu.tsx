import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeIconOutlined from "@mui/icons-material/HomeOutlined";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import * as React from "react";
import Image from "next/image";

export default function DropDownMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={1}>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Image src="/images/logo.jpg" alt="logo" height={75} width={75} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                backgroundColor: "rgba(15, 23, 42, 0.95)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(15,23,42,0.55)",
                backdropFilter: "blur(16px)",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                    <a className="flex gap-4" href="/">
                      <HomeIconOutlined fontSize="small" />
                      Home
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                    <a className="flex gap-4" href="/users/works">
                      <PeopleOutlineOutlinedIcon />
                      Trabalhos
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                    <a className="flex gap-4" href="/users">
                      <InfoOutlinedIcon />
                      About
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                    <a className="flex gap-4" href="/users">
                      <Person2OutlinedIcon /> My account
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                    <a className="flex gap-4" href="/error">
                      <SettingsOutlinedIcon /> Settings
                    </a>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
