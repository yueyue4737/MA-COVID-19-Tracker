import "../styles.css";
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const API_KEY = "O6Po4sga6fFN4R9KMiEBrdER7mjiefXWxRxmQiPR";
let baseUrl =
  "https://api.fda.gov/device/covid19serology.json?api_key=" + API_KEY;
// const url = "https://api.fda.gov/device/covid19serology.json?limit=100";

export default function Dashboard() {
  const [columns, setColumns] = useState("");
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [num, setNum] = useState(100);

  let url = "";
  if (search === "") {
    url = baseUrl + "&limit=" + num;
  } else {
    url = baseUrl + "&search=sample_id:" + search + "&limit=1";
  }

  useEffect(() => {
    async function getColumnsAsync() {
      try {
        let response = await fetch(url);
        const getResponse = await response.json();
        setColumns(getResponse.results[0]);
        setData(getResponse.results);
      } catch (err) {
        console.log(err);
      }
    }
    getColumnsAsync();
  }, [search]);

  let cols = Object.keys(columns);

  let rows = [];
  for (const [k, v] of Object.entries(data)) {
    rows.push(Object.values(v));
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      color: "inherit"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const handleClick = e => {
    setNum(prev => prev + 100);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <label>
                Search:
                <input
                  type="text"
                  placeholder="Sample ID"
                  onChange={handleInput}
                />
              </label>
              <Button variant="contained" color="primary" onClick={handleClick}>
                Add
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main className="App-body">
        <Table>
          <TableHead>
            {cols.map(col => {
              return (
                <TableCell
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    fontSize: "10px"
                  }}
                >
                  <TableSortLabel direction={"desc"}>{col}</TableSortLabel>
                </TableCell>
              );
            })}
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>{row[3]}</TableCell>
                    <TableCell>{row[4]}</TableCell>
                    <TableCell>{row[5]}</TableCell>
                    <TableCell>{row[6]}</TableCell>
                    <TableCell>{row[7]}</TableCell>
                    <TableCell>{row[8]}</TableCell>
                    <TableCell>{row[9]}</TableCell>
                    <TableCell>{row[10]}</TableCell>
                    <TableCell>{row[11]}</TableCell>
                    <TableCell>{row[12]}</TableCell>
                    <TableCell>{row[13]}</TableCell>
                    <TableCell>{row[14]}</TableCell>
                    <TableCell>{row[15]}</TableCell>
                    <TableCell>{row[16]}</TableCell>
                    <TableCell>{row[17]}</TableCell>
                    <TableCell>{row[18]}</TableCell>
                    <TableCell>{row[19]}</TableCell>
                    <TableCell>{row[20]}</TableCell>
                    <TableCell>{row[21]}</TableCell>
                    <TableCell>{row[22]}</TableCell>
                    <TableCell>{row[23]}</TableCell>
                    <TableCell>{row[24]}</TableCell>
                    <TableCell>{row[25]}</TableCell>
                    <TableCell>{row[26]}</TableCell>
                    <TableCell>{row[27]}</TableCell>
                    <TableCell>{row[28]}</TableCell>
                    <TableCell>{row[29]}</TableCell>
                    <TableCell>{row[30]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Table>
      </main>
      <footer>
        <a
          className="App-link"
          href="https://open.fda.gov/apis/device/covid19serology/"
          target="_blank"
        >
          Data Endpoint
        </a>
      </footer>
    </div>
  );
}
