import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { thousandSeparator } from "../../utils/global-services";

const useStyles = makeStyles(() => ({
  textAlign: {
    textAlign: "right",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  cardContainer: {
    marginBottom: 5,
  },
}));

const FlightListOneWay = (props) => {
  const { flightList, bookNow } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let component = null;

  /**
   * @function handleChangePage
   * @param {object} event
   * @param {object} newPage
   * @description change page in pagination
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * @function handleChangeRowsPerPage
   * @param {object} event
   * @description change rows per page in pagination
   */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (flightList?.loading) {
    component = <CircularProgress />;
  } else if (flightList?.result?.length > 0) {
    component = (
      <>
        <Table>
          <TableBody>
            {flightList.result
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <Card className={classes.cardContainer}>
                        <CardContent>
                          <Grid container>
                            <Grid item xs={2}>
                              <Avatar style={{ width:80, height: 80 }}
                                src={item.airlineLogo}
                                alt={item.airlineName}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              className={classes.textAlignCenter}
                            >
                              <Typography align="center">
                                {item.deptTime}
                              </Typography>
                              <Typography variant="caption">
                                {item.deptCity}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              className={classes.textAlignCenter}
                            >
                              <Typography>{item.airlineName}</Typography>
                              <Typography variant="caption">
                                {item.flightNbr}
                              </Typography>
                              <br />
                              <Typography variant="caption">
                                {item.noOfStops === "0"
                                  ? `No Stops`
                                  : `${item.noOfStops} Stops`}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              className={classes.textAlignCenter}
                            >
                              <Typography>{item.arivalTime}</Typography>
                              <Typography variant="caption">
                                {item.arivalCity}
                              </Typography>
                            </Grid>
                            <Grid item xs={4} className={classes.textAlign}>
                              <Button
                                // variant="contained"
                                // color="primary"
                                
                              > ₹ {`${thousandSeparator(
                                item?.price
                              )}`}</Button>
                              <br/>
                              <Button 
                              style={{ background : "#fc634d", color: "#fff" }}
                              onClick={() => bookNow(item)}>Select</Button>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={flightList.result.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
    );
  } else if (flightList?.result?.length === 0) {
    component = <Typography>{`No Records Found..`}</Typography>;
  } else if (flightList?.error) {
    component = <Typography>{`Unable to fetch Data...`}</Typography>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {component}
      </Grid>
    </Grid>
  );
};

FlightListOneWay.propTypes = {
  classes: PropTypes.object,
  flightList: PropTypes.object,
  bookNow: PropTypes.func,
};

export default FlightListOneWay;
