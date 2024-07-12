// the css write on overview.css file
import  React ,{useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';
import {AppBar,Box,Toolbar,IconButton,Typography,InputBase,FormGroup,FormControlLabel,Checkbox,MenuItem,Menu,
  FormControl,Paper,Avatar,Grid,Divider,Select,Stack,Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArchiveIcon from '@mui/icons-material/Archive';
import User1 from "../../../assets/images/kanban/img1.png";
import User2 from "../../../assets/images/kanban/img2.png";
import User3 from "../../../assets/images/kanban/img3.png";
import User4 from "../../../assets/images/kanban/img4.png";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tasks from "../../../assets/images/AllTasks/tasks.png";
import SubTasks from "../../../assets/images/AllTasks/subtasks.png";
import Chat from "../../../assets/images/AllTasks/chat.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TuneIcon from '@mui/icons-material/Tune';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Taskslist from '../../../components/Common/tasklist';
import Subtaskslist from "../../../components/Common/subtaskslist"
function handleClick(event) {
  event.preventDefault();
}

const options = ["Edit", "Archive", "Delete"];

const ITEM_HEIGHT = 48;

const AllTasks=()=>{
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
            <Link to="/alltasks" className="link text-primary">
                Tasks
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
          All Active Tasks
        </Typography>
        {/* Show current Backlog */}
        <Box>
            <Box className="alltasks overview">
              {[...Array(10)].map((i, x) => (
                <Box>
                  <Paper className="taskslist" elevation={4} sx={{borderRadius:"10px"}}>
                    <Taskslist key={i}/>
                  </Paper>
                  {[...Array(1)].map((i,x) => (
                    <Box className="subtasks">
                      <Paper className="taskslist" elevation={4} sx={{borderRadius:"10px"}}>
                        <Subtaskslist key={i}/>
                      </Paper>
                    </Box>
                  ))}
                </Box>
                // tasks End
              ))}
            </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default AllTasks;

