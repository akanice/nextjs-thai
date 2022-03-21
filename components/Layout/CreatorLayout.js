import LeftMenu from '../Creator/LeftMenu';
import SimpleSearchInput from 'common/SimpleSearchInput';
import { Avatar, Button } from 'components';
import Logo from 'common/Logo';
import React, { useRef, useState } from 'react';
import Head from 'common/Head';
import OptionBoxLoggedIn from 'components/Header/Superfan/sub/OptionBoxLoggedIn';
import OptionBox from 'components/Header/Superfan/sub/OptionBox';
import { useSelector } from 'react-redux';
import { useOnClickOutside } from 'hooks/common';
import CreatorOptionBox from 'components/Layout/Sub/CreatorOptionBox';
import CreatorHeader from 'components/Header/Creator/index';
import ChargeModal from '../Account/Creator/Element/ChargeModal';
import WatchListModal from 'components/WatchList/WatchListModal';
import SaveCampaignToWatchlistModal from 'components/WatchList/SaveCampaignToWatchlistModal';

const CreatorLayout = ({ children, title, renderSubHeader }) => {
  const showChargeModal = useSelector((state) => state.payment?.showChargeModal);
  const [expanded, setExpanded] = useState(false);
  const optionBoxRef = useRef();
  const auth = useSelector((state) => state.auth);
  useOnClickOutside(optionBoxRef, () => {
    setExpanded(false);
  });
  return (
    <div className={`bg-main-bg`}>
      <Head title={`SuperJOI - ${title}`} />
      {/*<div className={`w-80 mr-8`}>*/}
      {/*  <LeftMenu />*/}
      {/*</div>*/}
      <CreatorHeader renderSubHeader={renderSubHeader} className={`mb-12`} />
      <div className={`px-10`}>{children}</div>

      {/*<div className={`pt-16 pr-5`}>*/}
      {/*  {!hideHeader && (*/}
      {/*    <div className={`flex justify-between items-end mb-8`}>*/}
      {/*      <div className={`flex flex-col`}>*/}
      {/*        <p className={`text-gray-500`}>Hi {auth.user.name},</p>*/}
      {/*        <div className={`flex`}>*/}
      {/*          <span className={`mr-2 font-bold`} style={{ fontSize: `2.2rem` }}>*/}
      {/*            Welcome to*/}
      {/*          </span>*/}
      {/*          <span className={`font-bold`} style={{ fontSize: `2.2rem` }}>*/}
      {/*            Super*/}
      {/*          </span>*/}
      {/*          <span className={`font-bold gradient-text`} style={{ fontSize: `2.2rem` }}>*/}
      {/*            joi*/}
      {/*          </span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className={`flex items-center w-96`}>*/}
      {/*        <SimpleSearchInput className={`bg-white mr-4`} />*/}
      {/*        {auth?.isLogged && (*/}
      {/*          <div className={`relative`}>*/}
      {/*            {expanded && (*/}
      {/*              <div className={`absolute z-10 bottom-0 right-0`}>*/}
      {/*                <CreatorOptionBox setExpanded={setExpanded} ref={optionBoxRef} />*/}
      {/*              </div>*/}
      {/*            )}*/}
      {/*            <Button className={`w-10 h-10`} transparent onClick={() => setExpanded(true)}>*/}
      {/*              <Avatar name={auth?.user?.avatar} size={10} />*/}
      {/*            </Button>*/}
      {/*          </div>*/}
      {/*        )}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  <div style={{ width: `calc(100vw - 22rem)` }}>{children}</div>*/}
      {/*</div>*/}
      <ChargeModal show={showChargeModal} />
      <WatchListModal />
    </div>
  );
};

export default CreatorLayout;
