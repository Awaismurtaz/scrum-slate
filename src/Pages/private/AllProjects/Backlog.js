// the css write on overview.css file
import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TuneIcon from '@mui/icons-material/Tune';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import User1 from "../../../assets/images/kanban/img1.png";
import User2 from "../../../assets/images/kanban/img2.png";
import User3 from "../../../assets/images/kanban/img3.png";
import User4 from "../../../assets/images/kanban/img4.png";
import Subtaskslist from "../../../components/Common/subtaskslist";
import Taskslist from "../../../components/Common/tasklist";
function handleClick(event) {
  event.preventDefault();
}

const options = ["Edit", "Archive", "Delete"];

const ITEM_HEIGHT = 48;

const Backlog=()=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isActive, setIsActive] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelActive=()=>{
    setIsActive(!isActive)
  }

 
  return (
    <React.Fragment>
      <Box className="overview_section backlog-section">
        <div role="presentation" className="breadcrumbs">
          <Breadcrumbs>
            <Link to="/projects" className="link">
              Projects
            </Link>
            <Link to="/overview" className="link">
              E- Commerce Dashboard
            </Link>
            <Link to="/backlog" className="link text-primary">
                Backlog
            </Link>
          </Breadcrumbs>
        </div>
        <Box>
          <Box className="ProjectNameBar">
            <Toolbar className="toolbar">
              <Typography
                variant="h4"
                noWrap
                className="ComponentName"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                E- Commerce Dashboard
              </Typography>
              <Box>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <Box >
                      <Button
                        variant="outlined"
                        {...bindTrigger(popupState)}
                        startIcon={<TuneIcon />}
                      >
                        filter
                      </Button>
                      <Menu {...bindMenu(popupState)} className="filtermenu">
                        <MenuItem className='opetion'>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Only me"
                          />
                        </MenuItem>
                        <MenuItem className='opetion'>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Recent Uploaded"
                          />
                        </MenuItem>
                      </Menu>
                    </Box>
                  )}
                </PopupState>
              </Box>
              <Stack className="overview_avatargroup">
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
              <Button className="ArchiveIcon" onClick={handelActive}>
                <IconButton>
                  {isActive ? <ArchiveIcon color="primary" /> : <ArchiveIcon />}
                </IconButton>
              </Button>
            </Toolbar>
          </Box>
        </Box>
        <Typography
          variant="h5"
          className="backlog_name"
          noWrap
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Backlog
        </Typography>
        {/* Show current Backlog */}
        <Box>
          {[...Array(1)].map(() => (
            <Box className="overview">
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
                  Oct 04 - Oct 08
                  </Typography>
                </Box>
                <Box className="ActiveBacklogHeader">
                  <Box className="ActiveBackloValue">
                   <Paper className='firstvalue'  elevation={0}>2</Paper>
                   <Paper className='secondvalue' elevation={0}>3</Paper>
                   <Paper className='thiredvalue' elevation={0}>5</Paper>
                  </Box>
                  <Button variant="outlined" sx={{borderRadius:"10px", fontWeight:"600"}}>Complete Sprint</Button>
                   
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
              {[...Array(1)].map((i, x) => (
                <Box>
                  <Taskslist/>
                  {[...Array(2)].map(() => (
                    <Box className="subtasks">
                       <Subtaskslist/>
                    </Box>
                  ))}
                </Box>
                // tasks End
              ))}
              <Toolbar>
                <Link to="#" className="footerlink">
                  <Typography
                    color="primary"
                    variant="subtiltle"
                    fontWeight={600}
                  >
                    <AddIcon />
                    Add Task
                  </Typography>
                </Link>
              </Toolbar>
            </Box>
          ))}
        </Box>
        {/* show backlog */}
        <Box>
          {[...Array(3)].map(() => (
            <Box className="backlogTaks">
              <Toolbar className="backlogheader">
                      <Typography
                        variant="h5"
                        noWrap
                        fontWeight={600}
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        FrontEnd Side
                      </Typography>
                      <Box className="createSprint">
                        <Link to="#" className="footerlink">
                            <Typography
                              color="primary"
                              variant="subtiltle"
                              fontWeight={600}
                            >
                              <AddIcon />
                              Add Task
                            </Typography>
                         </Link>
                         <Button variant="outlined" sx={{borderRadius:"10px", fontWeight:"600"}}>Create Sprint</Button>
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
              {[...Array(1)].map((i, x) => (
                <Box>
                  <Taskslist/>
                  {[...Array(2)].map(() => (
                    <Box className="subtasks">
                      <Subtaskslist/>
                    </Box>
                  ))}
                </Box>
                // tasks End
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default Backlog;

