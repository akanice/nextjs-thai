import React, {useEffect, useState} from 'react';
import Button from "components/Common/Button";
import {Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CustomDrawer from "components/Common/CustomDrawer";
import LogoFull from "components/Common/Icon/LogoFull";
import Logo from "components/Common/Icon/Logo";
import Home from "components/Common/Icon/LeftDrawer/Home";
import Wallet from "components/Common/Icon/LeftDrawer/Wallet";
import Product from "components/Common/Icon/LeftDrawer/Product";
import Project from "components/Common/Icon/LeftDrawer/Project";
import ChevronLeft from "components/Common/Icon/LeftDrawer/ChevronLeft";
import ChevronRight from "components/Common/Icon/LeftDrawer/ChevronRight";
import Information from "components/Common/Icon/LeftDrawer/Information";
import {BsDot} from "react-icons/bs";
import {useRouter} from "next/router";
import {BsChevronRight, BsChevronDown} from 'react-icons/bs';
import Router from 'next/router'

const MENUS = [
  {
    title: "Trang chủ",
    icon: <Home/>,
    link: '/borrower'
  },
  {
    title: "Thu xếp vốn",
    icon: <Project/>,
    link: '#',
    children: [
      {
        title: "Tạo yêu cầu",
        link: '/borrower/request'
      },
      {
        title: "Danh sách yêu cầu",
        link: '/borrower/request/list'
      },
    ]
  },
  {
    title: "Ví của tôi",
    icon: <Wallet/>,
    link: '/product',
    children: [
      {
        title: "Lịch sử giao dịch",
        link: '/borrower/wallet'
      },
    ]
  }
]

const LeftDrawer = ({}) => {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('');
    const router = useRouter();

    useEffect(() => {
      for (const menu of MENUS) {
        if (menu.link === router.asPath) {
          setSelectedMenu(menu.title)
        } else if (menu.children) {
          for (const c of menu.children) {
            if (c.link === router.asPath) {
              setSelectedMenu(menu.title)
            }
          }
        }
      }
    }, [router.asPath])

    return (
      <div className={'relative'}>
        <div onClick={() => setOpen(!open)} className={'cursor-pointer absolute rounded-full flex items-center justify-center bg-white w-7 h-7 shadow z-[1999] right-0 top-[256px] translate-x-1/2'}>
          {!open ?  <ChevronRight/> : <ChevronLeft/>}
        </div>
        <CustomDrawer className={`${open ? 'expanded' : 'collapsed'} relative`} variant="permanent" open={open}>
          <div onClick={()=>Router.push("/borrower")} className={'w-full flex items-center justify-center mb-8 mt-3'}>
            {open ? <LogoFull/> : <Logo/>}
          </div>

          <List component={"div"}>
            {MENUS.map((menu, ind) => (
              <ListItem key={ind} disablePadding sx={{ display: "block", marginTop: '6px' }}>
                <ListItemButton
                  onClick={() => {
                    if (menu.children) {
                      setSelectedMenu(current => current === menu.title ? '' : menu.title)
                    } else {
                      router.push(menu.link);
                    }
                  }}
                  selected={menu.link === router.asPath}
                >
                  <ListItemIcon style={{minWidth: '0px'}}  className={`min-w-0 justify-center ${open ? 'mr-2' : ''}`}>
                    <div className={'w-5 h-5 flex items-center justify-center'}>
                      {menu.icon}
                    </div>
                  </ListItemIcon>
                  <ListItemText primary={menu.title} className={`${open ? 'opacity-100' : 'opacity-0'}`} />
                  {menu.children && selectedMenu != menu.title && <BsChevronRight></BsChevronRight>}
                  {menu.children && selectedMenu == menu.title && <BsChevronDown></BsChevronDown>}
                </ListItemButton>
                {menu.children && <Collapse in={selectedMenu === menu.title} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.children.map((c, cind) => (
                      <ListItemButton selected={c.link === router.asPath} key={cind} onClick={() => router.push(c.link)}>
                        <ListItemIcon style={{minWidth: '0px'}}  className={`min-w-0 justify-center ${open ? 'mr-2' : ''}`}>
                          <div className={'w-5 h-5 flex items-center justify-center'}>
                            <BsDot size={32}/>
                          </div>

                        </ListItemIcon>
                        <ListItemText  className={`${open ? 'opacity-100' : 'opacity-0'}`} primary={c.title} />
                    </ListItemButton>))}
                  </List>
                </Collapse>}
              </ListItem>
            ))}
          </List>
        </CustomDrawer>
      </div>
    )
}

export default LeftDrawer