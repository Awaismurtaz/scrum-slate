import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, IconButton, Menu, MenuItem, Paper, Toolbar, Typography ,Skeleton} from "@mui/material";
import * as React from "react";
import Chat from "../../assets/images/AllTasks/chat.png";
import SubTasks from "../../assets/images/AllTasks/subtasks.png";
import User1 from "../../assets/images/kanban/img1.png";


const options = ["Edit", "Archive", "Delete"];
const ITEM_HEIGHT = 48;
const Subtaskslist = () => {
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
      },6000)
      return ()=>clearTimeout(delay)
    },[])
  return (
    <Box className="taskslist">
    <Toolbar className="TaskGridHeader tasklist-text ">
      <Box sx={{ display: "flex" }} >
          {loading?
              <Skeleton variant="rounded" width={40} height={30} />:
              <img
              src={SubTasks}
              style={{
                marginRight: "10px",
                width: "20px",
                height: "20px",
              }}
            />
          }
              <Box>
                  {loading?
                    <Skeleton variant="rounded" width={200} height={30} sx={{marginLeft:"10px"}} />:
                    <Typography variant="subtitle2" Wrap>
                      Create a page to manage team members
                    </Typography>
                  }
              </Box>
      </Box>
      <Box className="tasklistdata">
                {loading?
                  <Skeleton variant="rounded" width={100} height={30} /> :
                  <Paper className="priority">
                    <KeyboardDoubleArrowUpIcon fontSize="small" />
                    HIGH PRIORITY
                  </Paper>
                 }
                {loading?
                 <Skeleton variant="rounded" width={100} height={30} /> :
                  <Paper className="date">
                    <CalendarMonthIcon fontSize="small" />
                    Oct 04 - Oct 08
                  </Paper>
                }
                 {loading?
                    <Skeleton variant="rounded" width={100} height={30} /> :
                    <Paper className="ToDo">To Do</Paper>
                 }
                  {loading?
                    <Skeleton variant="rounded" width={40} height={30} /> :
                      <Paper className="Chat">
                        <img src={Chat} style={{ marginRight: "5px" }} />3
                      </Paper>
                   }
                    {loading?
                      <Skeleton variant="rounded" width={40} height={30} /> :
                      <Paper className="tasknumber">9</Paper>
                    }
                     {loading?
                      <Skeleton variant="rounded" width={40} height={30} /> :
                      <Avatar src={User1} variant="rounded" 
                      sx={{width:"33px",height:"33px"}}
                      />
                     }
                      {loading?
                        <Skeleton variant="rounded" width={40} height={30} /> :
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
            </Box>
    </Toolbar>
  </Box>
  )
}

export default Subtaskslist
