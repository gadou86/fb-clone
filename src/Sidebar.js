import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" title="Gad Dayan" />
      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Video'/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace'/>
    </div>
  )
}

export default Sidebar
