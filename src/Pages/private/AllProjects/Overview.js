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
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User1 from "../../../assets/images/kanban/imgl1.png";
import User2 from "../../../assets/images/kanban/imgl2.png";
import User3 from "../../../assets/images/kanban/imgl3.png";
import User4 from "../../../assets/images/kanban/imgl4.png";
import Bugslists from '../../../components/Common/bugslist';
import Subtaskslist from "../../../components/Common/subtaskslist";
import Taskslist from "../../../components/Common/tasklist";
const options = ["Edit", "Archive", "Delete"];

const ITEM_HEIGHT = 48;

const Overview=()=>{
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
      <Box className="overview_section">
        <Box role="presentation" className="breadcrumbs">
          <Breadcrumbs>
            <Link to="/projects" className="link">
              Projects
            </Link>
            <Link to="/overview" className="link">
              E- Commerce Dashboard
            </Link>
            <Link to="/overview" className="link text-primary">
              Overview
            </Link>
          </Breadcrumbs>
        </Box>
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
                    <Box>
                      <Button
                        variant="outlined"
                        {...bindTrigger(popupState)}
                        startIcon={<TuneIcon />}
                        sx={{ width: "100%" }}
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
          variant="h6"
          className="project_text"
          noWrap
          sx={{
            display: { xs: "none", sm: "block" },
            fontSize: "17px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          massa, scelerisque vel purus nec, viverra feugiat metus. Fusce
          porttitor mi vitae lectus gravida, a lobortis felis auctor. Duis sit
        </Typography>
        <Box>
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
              {[...Array(2)].map((i, x) => (
                <Box>
                  <Taskslist key={i}/>
                  {[...Array(1)].map(() => (
                    <Box className="subtasks">
                      <Subtaskslist key={i}/>
                    </Box>
                  ))}
                </Box>
                // tasks End
              ))}
              <Toolbar sx={{ justifyContent: "space-between" }}>
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
                <Link to="/alltasks" className="footerlink">
                  <Typography
                    color="primary"
                    variant="subtiltle"
                    fontWeight={600}
                  >
                    View All Tasks
                  </Typography>
                </Link>
              </Toolbar>
            </Box>
          
          {/* buges */}
          <Box className="overview Buges">
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
                    Recent Bugs
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom color={"gray"}>
                    4 Bugs 
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
              {[...Array(5)].map((i, x) => (
                <Box>
                  <Bugslists key={i}/>
                </Box>
                // Buge End
              ))}
              <Toolbar sx={{ justifyContent: "space-between" }}>
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
                <Link to="/allbuges" className="footerlink">
                  <Typography
                    color="primary"
                    variant="subtiltle"
                    fontWeight={600}
                  >
                    View All Buges
                  </Typography>
                </Link>
              </Toolbar>
            </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default Overview;

