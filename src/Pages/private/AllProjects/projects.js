import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Select, Stack,
  Toolbar,
  Typography,
  Skeleton
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import KanbanView from "../../../assets/images/kabanview.svg";
import User1 from "../../../assets/images/kanban/img1.png";
import User2 from "../../../assets/images/kanban/img2.png";
import User3 from "../../../assets/images/kanban/img3.png";
import User4 from "../../../assets/images/kanban/img4.png";
import ListView from "../../../assets/images/listview.svg";

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
  paddingLeft:"0"
}));

const options = ["Edit", "Archive", "Delete"];

const ITEM_HEIGHT = 48;
const Projects = () => {
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading ]=React.useState(true)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(()=>{
    const delay =setTimeout(()=>{
      setLoading(false)
    },5000)
    return ()=>clearTimeout(delay)
  },[])
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="projects">
        <AppBar position="static" className="project_header">
          <Toolbar>
            <Typography
              variant="h4"
              fontWeight={600}
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                opacity: "0.9",
                fontSize: "25px",
                marginLeft:"25px"
              }}
            >
              All project
            </Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl
                sx={{ m: 1, position: "relative", width: 180 }}
                size="small"
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // onChange={handleChange}
                  className="ViewMethod"
                  defaultValue={"Kanban View"}
                >
                  <MenuItem value="Kanban View">
                    <img src={KanbanView} style={{ paddingRight: "6px" }} />
                    Kanban View
                  </MenuItem>
                  <MenuItem value="list">
                    <img src={ListView} style={{ paddingRight: "6px" }} />
                     List View
                  </MenuItem>
                </Select>
              </FormControl>
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
      <Box className="AllProjectComponent">
        <Grid container spacing={2} className="allproject">
          {[...Array(9)].map((e, i) => (
          
            <Grid item xs={6} md={4} key={i + 1}>
              <Item >
                <Box className="hr"/>
                <Toolbar sx={{justifyContent:"space-between"}}>
                {loading?
                    <Skeleton variant="rounded" width={150} height={30}/>:
                    <Link to="/overview" className="link">
                    <Typography
                    className="project_title"
                      sx={{
                        flexGrow: 1,
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      E- Commerce Dashboard
                    </Typography>
                    </Link>
                   }
                      {loading?
                    <Skeleton variant="rounded" width={40} height={30} />:
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
                      }
                  
                 
                </Toolbar>
                <Box className="latest_update">
                {loading?
                    <Skeleton variant="rounded" width={100} height={30} sx={{marginBottom:"10px"}} />:
                    <Typography className="text">
                    Last update: 10/30/2023
                  </Typography>
                }
                   {loading?
                        <Skeleton variant="rounded" width={100} height={30} sx={{marginBottom:"10px"}} />:
                        <Stack
                        className="project_data"
                        direction="row"
                        divider={
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ border: "1px solid black" }}
                          />
                        }
                        spacing={1}
                      >
                        <Item className="data">Task: 05 </Item>
                        <Item className="data">Bugs: 28 </Item>
                        <Item className="data">Sprints: 8</Item>
                      </Stack>
                   }
                 
                </Box>
                <Divider sx={{ border: "1px solid gray",width:"90%",marginLeft:"25px"}} />
                <Toolbar className="projectfooter">
                {loading?
                        <Skeleton variant="rounded" width={100} height={30} sx={{marginBottom:"10px"}} />:
                        <Stack className="projectAvatarGroup">
                        <Avatar
                          className="avatar"
                          alt="Ali Hadder"
                          src={User1}
                          variant="rounded"
                        />
                        <Avatar
                          className="avatar"
                          alt="Ali Hadder"
                          src={User2}
                          variant="rounded"
                        />
                        <Avatar
                          className="avatar"
                          alt="Ali Hadder"
                          src={User3}
                          variant="rounded"
                        />
                        <Avatar
                          className="avatar"
                          alt="Ali Hadder"
                          src={User4}
                          variant="rounded"
                        />
                        <Avatar className="avatar add" variant="rounded">
                          <AddIcon />
                        </Avatar>
                      </Stack>
                }
                 
                  <Box className="latest_update">
                  {loading?
                        <Skeleton variant="rounded" width={100} height={30} sx={{marginBottom:"10px"}} />:
                    <Typography className="text">
                      Last update: 10/30/2023
                    </Typography>
                  }
                  </Box>
                </Toolbar>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Projects;
