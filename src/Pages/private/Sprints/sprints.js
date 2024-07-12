import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar, Box,
  FormControl,
  InputBase,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardHeader ,
  CardMedia,
  CardContent,
  CardActions, 
  Collapse ,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Subtaskslist from "../../../components/Common/subtaskslist";
import Taskslist from "../../../components/Common/tasklist";
import Bugslists from '../../../components/Common/bugslist';
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
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Sprints = () => {
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  // const [expanded, setExpanded] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [expanded, setExpanded] = React.useState(Array([]).fill(false));
  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  return (
    <React.Fragment>
      <Box className="sprint">
        <Box sx={{ flexGrow: 1 }}>
        <Box position="static" >
            <Toolbar>
              <Typography
                variant="h4"
                noWrap
                className="ComponentName"
                sx={{
                  display: { xs: "none", sm: "block",marginLeft:"0 !important"},
                }}
              >
                All Sprints
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
        {[...Array(10)].map((item,index)=>(
                <Box key={index}>
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
                          Project {index+1}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom color={"gray"}>
                          5 sprints
                        </Typography>
                      </Box>
                </Toolbar>
                <Card className="sprintcard">
              <CardActions disableSpacing>
                <ExpandMore
                  sx={{ width: "40px" }}
                  expand={expanded[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
                <Box sx={{ width: "100%" }}>

                  <Toolbar className="sprintheader" >
                    <Box className="TaskGridHeader_text">
                      <Typography
                        variant="h6"
                        noWrap
                        fontWeight={600}
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        Sprint Name
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom color={"gray"}>
                        46 Tasks |
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom color={"gray"}>
                        Oct 04 - Oct 08
                      </Typography>
                    </Box>
                    <Box className="ActiveBacklogHeader  sprintnumber">
                      <Box className="ActiveBackloValue">
                        <Paper className='firstvalue' elevation={0}>2</Paper>
                        <Paper className='secondvalue' elevation={0}>3</Paper>
                        <Paper className='thiredvalue' elevation={0}>5</Paper>
                      </Box>
                      <Button variant="outlined" sx={{ borderRadius: "10px", fontWeight: "600" }}>Complete Sprint</Button>

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
                </Box>
              </CardActions>
                    <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                      <CardContent>
                         <Box>
                    {[...Array(1)].map((i, x) => (
                      <Box>
                        <Taskslist key={i} />
                        {[...Array(2)].map((i, x) => (
                          <Box className="subtasks">
                            <Subtaskslist key={i} />
                          </Box>
                        ))}
                        <Box>
                        {[...Array(1)].map((i, x) => (
                        <Box>
                          <Bugslists key={i}/>
                        </Box>
                        // Buge End
                      ))}
                        </Box>
                      </Box>
                      // tasks End
                    ))}
                         </Box>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Box>
        ))}
      
      </Box>
    </React.Fragment>
  );
};

export default Sprints;
