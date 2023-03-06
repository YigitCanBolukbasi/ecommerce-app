import { MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

// eslint-disable-next-line import/no-cycle
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const handleAnchorEl = (event) => {
    setDropdown((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  return (
    <MenuItemStyled ref={ref}>
      <Stack>
        {items.submenu ? (
          <>
            <ButtonDropdown
              variant="outlined"
              id="basic-button"
              aria-controls={dropdown ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={dropdown ? "true" : undefined}
              onClick={handleAnchorEl}
            >
              {items.title}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </ButtonDropdown>
            <Dropdown
              anchorEl={anchorEl}
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <MenuText>{items.title}</MenuText>
        )}
      </Stack>
    </MenuItemStyled>
  );
};

MenuItems.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    submenu: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
      })
    ),
  }).isRequired,
  depthLevel: PropTypes.number.isRequired,
};

export default MenuItems;

const ButtonDropdown = styled(Button)(({ theme }) => ({
  background: "white",
  boxShadow: "none",
  border: "none",
  color: "#32363A",
  "&:hover": {
    background: "white",
    boxShadow: "none",
    border: "none",
    color: "#32363A",
  },
  "&:active": {
    background: "white",
    boxShadow: "none",
    border: "none",
    color: "#32363A",
  },
  "&:focus": {
    background: "white",
    boxShadow: "none",
    border: "none",
    color: "#32363A",
  },
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "8px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MenuText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
