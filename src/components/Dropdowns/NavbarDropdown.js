import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import Add from "@material-ui/icons/Add";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
// core components
import componentStyles from "assets/theme/components/navbar-dropdown.js";

const useStyles = makeStyles(componentStyles);

export default function NavbarDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Bienvenido!
      </Typography>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <a href="../admin/index" style={{ textDecoration: "none" }}>
          <span>Inicio</span>
        </a>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Add}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <a
          href="../admin/crear-sesion-entrenamiento"
          style={{ textDecoration: "none" }}
        >
          <span>Crear Sesion De Entrenamiento</span>
        </a>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <a
          href="../admin/configuracion-sesion-entrenamiento"
          style={{ textDecoration: "none" }}
        >
          <span>Configuracion Sesion De Entrenamiento</span>
        </a>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Add}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <a
          href="../admin/crear-metodo-entrenamiento"
          style={{ textDecoration: "none" }}
        >
          <span>Crear Metodo De Entrenamiento</span>
        </a>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <a
          href="../admin/configuracion-metodo-entrenamiento"
          style={{ textDecoration: "none" }}
        >
          <span>Configuracion Metodo De Entrenamiento</span>
        </a>
      </Box>

      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={PowerSettingsNewIcon}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Cerrar Sesion</span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
          src={require("assets/img/theme/daniel.png").default}
          classes={{
            root: classes.avatarRoot,
          }}
        />
        {/* //TODO:reemplazar por nombre se la sesion */}
        <Hidden smDown>NicolasPa</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
