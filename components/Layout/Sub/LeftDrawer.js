import React, {useEffect, useState} from 'react';
import Button from "components/Common/Button";
import {Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CustomDrawer from "components/Common/CustomDrawer";
import LogoFull from "components/Common/Icon/LogoFull";
import Logo from "components/Common/Icon/Logo";
import {HiOutlineHome,HiOutlineDocumentReport,HiOutlineCash,HiOutlineDocumentText} from 'react-icons/hi';
import {FiSettings,FiMonitor} from 'react-icons/fi';
import ChevronLeft from "components/Common/Icon/LeftDrawer/ChevronLeft";
import ChevronRight from "components/Common/Icon/LeftDrawer/ChevronRight";
import {BsChevronRight} from "react-icons/bs";
import {useRouter} from "next/router";

const MENUS = [
  {
    title: "Dashboard",
    icon: <HiOutlineHome />,
    link: '#'
  },
  {
    title: "Báo cáo",
    icon: <HiOutlineDocumentReport />,
    link: '#',
    children: [
      {
        title: "Báo cáo doanh thu",
        link: '/dashboard/report/report-revenue'
      },
      {
        title: "Báo cáo kiểm soát",
        link: '/dashboard/report/report-control'
      },
      {
        title: "Vé suất/kiểm soát",
        link: '#'
      },
    ]
  },
  {
    title: "Kế toán",
    icon: <HiOutlineCash />,
    link: '#',
    children: [
      {
        title: "Đối soát",
        link: '#'
      },
      {
        title: "Xuất hóa đơn",
        link: '#'
      },
    ]
  },
  {
    title: "Danh mục",
    icon: <HiOutlineDocumentText />,
    link: '#',
    children: [
      {
        title: "Quản lý chi nhánh",
        link: '#'
      },
      {
        title: "Quản lý điểm bán",
        link: '#'
      },
      {
        title: "Quản lý điểm kiểm soát",
        link: '#'
      },
      {
        title: "Quản  trò chơi",
        link: '#'
      },
      {
        title: "Quản lý loại vé",
        link: '#'
      },
      {
        title: "Quản lý vé",
        link: '#'
      },
    ]
  },
  {
    title: "Cấu hình",
    icon: <FiSettings />,
    link: '#',
    children: [
      {
        title: "Quản lý pos",
        link: '#'
      },
      {
        title: "Cấu hình hệ thống",
        link: '#'
      },
    ]
  },
  {
    title: "Quản trị",
    icon: <FiMonitor />,
    link: '#',
    children: [
      {
        title: "Quản lý người dùng",
        link: '#'
      },
      {
        title: "Quản lý nhóm người dùng",
        link: '#'
      },
    ]
  },
  
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
          {/* <div className={'w-full flex items-center justify-center mb-8 mt-3'}>
            {open ? <LogoFull/> : <Logo/>}
          </div> */}

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
                  <ListItemIcon style={{minWidth: '0px'}}  className={`min-w-0 justify-center ${open ? 'mr-1' : ''}`}>
                    <div className={'w-5 h-5 flex items-center justify-center'}>
                      {menu.icon}
                    </div>
                  </ListItemIcon>
                  <div className={`font-semibold ${open ? 'opacity-100' : 'opacity-0'}`} >{menu.title}</div>
                </ListItemButton>
                {menu.children && <Collapse in={selectedMenu === menu.title} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.children.map((c, cind) => (
                      <ListItemButton selected={c.link === router.asPath} key={cind} onClick={() => router.push(c.link)}>
                        <ListItemIcon style={{minWidth: '0px'}}  className={`min-w-0 justify-center ${open ? 'mr-1' : ''}`}>
                          <div className={'w-5 h-5 flex items-center justify-center'}>
                            <BsChevronRight size={12}/>
                          </div>

                        </ListItemIcon>
                        <div className={`font-medium ${open ? 'opacity-100' : 'opacity-0'}`}>{c.title}</div>
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