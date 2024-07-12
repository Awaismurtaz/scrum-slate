import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from '@mui/material/List';
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faPenToSquare, faClipboardCheck, faTriangleExclamation, faRecycle, faMessage, faCalendarWeek, faUsers, faGear, faRightFromBracket, faGears, faDashboard } from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';



export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const location = useLocation();
  const path = location.pathname;
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="sidebar">
    <Box sx={{ width: '100%', maxWidth: 330, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/dashboard">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}  
        >
          <ListItemIcon>
            <FontAwesomeIcon icon={faDashboard}  className='icons'/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        </Link>
        <Link to="/projects">
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faPenToSquare}  className='icons'/>
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        </Link>
        <Link to="/tasks">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faClipboardCheck} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        </Link>
        <Link to="/buges">
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faTriangleExclamation} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Bugs" />
        </ListItemButton>
        </Link>
        <Link to="/sprints">
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faRecycle} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Sprints" />
        </ListItemButton>
        </Link>
        <Link to="#">
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faMessage} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Conversation" />
        </ListItemButton>
        </Link>
        <Link to="/wikies">
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faCalendarWeek} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Wikies" />
        </ListItemButton>
        </Link>
        <Link to="#">
        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
          <FontAwesomeIcon icon={faUsers} className='icons' />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItemButton>
        </Link>
      </List>
    </Box>
    {/* <Toolbar/>
    <Toolbar/>
    <Toolbar/>
    <Toolbar/> */}
    
    <Box sx={{ width: '100%', maxWidth: 330, bgcolor: 'background.paper' }}>
    <Divider/>
     <List component="nav" aria-label="main mailbox folders">
     <Link to="#">
        <ListItemButton
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemIcon>
              <FontAwesomeIcon icon={faGear} className='icons' />
              </ListItemIcon>
              <ListItemText primary="Settings" />
        </ListItemButton>
        </Link>
        <Link to="#">
        <ListItemButton
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}
            >
              <ListItemIcon>
              <FontAwesomeIcon icon={faRightFromBracket} className='icons' />
              </ListItemIcon>
              <ListItemText primary="Log out" />
        </ListItemButton>
        </Link>
     </List>
    </Box>
    </div>
  );
}
