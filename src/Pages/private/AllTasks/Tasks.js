import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, FormControl, IconButton, InputBase, Menu, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import Subtaskslist from "../../../components/Common/subtaskslist";
import Taskslist from "../../../components/Common/tasklist";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  border: "1px solid gray",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius:"10px",
  color: theme.palette.text.secondary,
}));

const options = ["Edit", "Archive", "Delete"];

const ITEM_HEIGHT = 48;
const Projects = () => {
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box className="tasks">
        <Box sx={{ flexGrow: 1 }}>
          <Box position="static" className="task_header">
            <Toolbar>
              <Typography
                variant="h4"
                noWrap
                className="ComponentName"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                All Tasks
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  sx={{ m: 1, position: "relative", width: 180 }}
                  size="small"
                ></FormControl>
              </Box>
              <Search className="search">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  className="inputBase"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </Box>
        </Box>
        {[...Array(3)].map(() => (
          <Box className="taskgrid">
            <Toolbar className="TaskGridHeader">
              <Box className="TaskGridHeader_text">
                <Typography
                    variant="h5"
                    noWrap
                    fontWeight={600}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Project Name
                </Typography>
                <Typography variant="subtitle2" gutterBottom color={"gray"}>
                  46 Tasks |
                </Typography>
                <Typography variant="subtitle2" gutterBottom color={"gray"}>
                  October 16, 2023
                </Typography>
              </Box>
              <Box>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "15ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
            {[...Array(1)].map((i,x) => (
              <Box>
                <Taskslist key={i}/>
              {[...Array(2)].map((i,x)=>(
                <Box className="subtasks">
                  <Subtaskslist key={i}/>
                </Box>
              ))} 
              </Box>
              // tasks End
              
            ))}
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Projects;
