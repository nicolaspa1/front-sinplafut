//TODO: Eliminar comentarios de importaciones Innecesarias

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

// core components
import WelcomeUserHeader from "components/Headers/WelcomeUserHeader.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  // const [ setActiveNav] = React.useState(1);
  // const [setChartExample1Data] = React.useState("data1");

  // if (window.Chart) {
  //   parseOptions(Chart, chartOptions());
  // }

  // const toggleNavs = (index) => {
  //   setActiveNav(index);
  //   setChartExample1Data("data" + index);
  // };
  return (
    <>
      <WelcomeUserHeader />
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
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Ultimas Sesiones De Entrenamiento Agregadas
                      </Box>
                    </Grid>
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
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </Box>
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
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver Detalles
                        </a>
                      </Box>
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
