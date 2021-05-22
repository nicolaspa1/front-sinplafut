
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

//Icons
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Container
                      maxWidth={false}
                      component={Box}
                      classes={{ root: classes.containerRoot }}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        marginTop="0.5rem"
                      >
                        <div>
                          <Typography
                            className={classes.brandTitle}
                            variant="h4"
                            component="a"
                          >
                            Configuracion Sesion De Entrenamiento
                          </Typography>
                        </div>
                        <Box display="flex" alignItems="center" width="auto">
                          <Box
                            display="flex"
                            alignItems="center"
                            width="auto"
                            marginRight="1rem"
                            classes={{
                              root: classes.searchBox,
                            }}
                          >
                            <SearchIcon className={classes.searchIcon} />
                            <InputBase
                              placeholder="Buscar Sesion"
                              classes={{
                                input: classes.searchInput,
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Container>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Nombre
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Metodos De Entrenamiento
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Tipo De Sesion
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Sesiones
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Configuracion
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        001
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Sesion 1
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          <CreateIcon/>
                        </a>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                           <DeleteIcon
                           color="Error"/>
                        </a>
                      </TableCell>
                      
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        002
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Sesion 2
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          <CreateIcon/>
                        </a>
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                           <DeleteIcon
                           color="Error"/>
                        </a>
                      </TableCell>
                      
                    </TableRow>
                    
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
