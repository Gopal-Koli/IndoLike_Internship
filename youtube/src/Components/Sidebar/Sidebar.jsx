import React from 'react'

import { MdSpaceDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiVideo } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import indolike from '../../assets/indolike.jpeg'
import tv9 from '../../assets/tv9.jpg'
import game from '../../assets/game.jpeg'
const Sidebar = ({ closeDrawer }) => {
  const [state, setState] = React.useState({top: false, });
  const iconsTop=[<FaHome/>,<SiYoutubeshorts />,<MdSubscriptions />]
  const iconsMid=[<FaHistory />,<RiPlayList2Fill />,<PiVideo />,<FaGraduationCap />,<MdOutlineWatchLater />,<BiLike />,<TfiDownload />]
  const iconImg=[
   { src: indolike, label: "Indolike" },
  { src: tv9, label: "Tv9 News" },
  { src: game, label: "Gopal Gaming" }]
  const [open, setOpen] = React.useState(false);
   const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className='sidebar custom-scrollbar fiexd to-100% bg-[#5B6C5D w-[16%] h-full   py- px-2 z-[1200] '>
      <br/>
       <Box sx={{ width: 250 }} className="custom-scrollbar verflow-y-auto" role="presentation !mt-50 sidebar !scrollbar-hide" 
        >
      <List className='text-2xl !p-2 !rouded-2xl !text-black'>
        {['Home',  'Shorts', 'Subscription'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className=''>
              <ListItemIcon className='!text-[black]'>
               {iconsTop[index%iconsTop.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className='text-2xl !p-2 !rounded-2xl'>
        {['History', 'Playlist', 'Your Videos' ,'Watch later' ,'Liked videos','Downloads'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className='!text-[black]'>
                {iconsMid[index%iconsMid.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />

         <p className='text-[15px] font-[550] !mt-2 !ml-5'>Suscription</p>
        <List className='text-2xl  !rounded-2xl'>
{iconImg.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon className='!text-[black]'>
                <img src={item.src} alt={item.label} className='w-6 h-6 rounded-full' />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />

        
       
        
      </List>

        
        <p className='text-[15px] font-[550] !mt-2 !ml-5'>Explore</p>
        
      </List>
      </Box>
  
    </div>
  )
}

export default Sidebar
