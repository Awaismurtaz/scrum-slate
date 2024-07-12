import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {AppBar,Box,Toolbar,IconButton,Typography,InputBase,MenuItem,
  FormControl,Paper,Avatar,Menu} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Bugs from "../../../assets/images/AllTasks/Bug.png"
import Chat from "../../../assets/images/AllTasks/chat.png";
import User1 from "../../../assets/images/kanban/img1.png";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Bugslist from "../../../components/Common/bugslist"
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
const AllBugs = () => {
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
    // tasks css file link init 
    // bugs not css file
    <React.Fragment>
      <Box className="tasks">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="task_header">
            <Toolbar>
              <Typography
                variant="h4"
                fontWeight={600}
                noWrap
                className="ComponentName"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                All Bugs
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
          </AppBar>
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
                  New User Testing
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
            {[...Array(3)].map((i,x) => (
              <Bugslist key={i}/>
            ))}
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default AllBugs;
