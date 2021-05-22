
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
import GetApp from "@material-ui/icons/GetApp";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

// core components
import UserHeader from "components/Headers/UserHeader.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

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
                            Documentos
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
                              placeholder="Buscar Documento"
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
                        Fecha De Creacion
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Autor
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Documento
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
                        Documento 1
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        13/11/2020
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Nicolas
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={GetApp}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        Documento1.docx
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
                        Documento 2
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        13/11/2020
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Nicolas
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={GetApp}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        Documento2.docx
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
                        003
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
                        Documento 3
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        13/11/2020
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Nicolas
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={GetApp}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        Documento3.docx
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
                        004
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
                        Documento 4
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        13/11/2020
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        Nicolas
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={GetApp}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        <a
                          href="#mui"
                          className={classes.cardProfileLink}
                          onClick={(e) => e.preventDefault()}
                        >
                          Documento4.docx
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
                        005
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Documento 5
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        13/11/2020
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        Nicolas
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={
                          classes.tableCellRoot +
                          " " +
                          classes.borderBottomUnset
                        }
                        marginBottom="-2px"
                      >
                        <Box
                          component={GetApp}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color={theme.palette.success.main}
                        />
                        Documento5.docx
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
