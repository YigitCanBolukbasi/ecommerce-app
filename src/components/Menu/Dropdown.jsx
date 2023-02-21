import { Box, Menu, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";
import image1 from "../../assets/jpgCarousel/image1.png";

// eslint-disable-next-line import/no-cycle
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel, anchorEl }) => {
  depthLevel += 1;

  return (
    <Menu
      sx={{
        "& .MuiMenuItem-root": {
          padding: "0 20px 0  20px",
        },
      }}
      id="basic-menu"
      open={dropdown}
      anchorEl={anchorEl}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Stack direction="row">
        <Box>
          <Typography>Header:</Typography>
          {submenus.map((submenu, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
          ))}
        </Box>
        <Box>
          <Typography>Header:</Typography>
          {submenus.map((submenu, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
          ))}
        </Box>
        <img src={image1} alt="image1" />
      </Stack>
    </Menu>
  );
};

Dropdown.propTypes = {
  submenus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
  dropdown: PropTypes.bool.isRequired,
  depthLevel: PropTypes.number.isRequired,
  anchorEl: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

Dropdown.defaultProps = {
  anchorEl: null,
};

export default Dropdown;
