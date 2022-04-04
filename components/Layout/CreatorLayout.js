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
      <Head title={`PVComBank - ${title}`} />
      {/*<div className={`w-80 mr-8`}>*/}
      {/*  <LeftMenu />*/}
      {/*</div>*/}
      <CreatorHeader renderSubHeader={renderSubHeader} className={`mb-12`} />
      <div className={`px-10`}>{children}</div>
      <ChargeModal show={showChargeModal} />
      <WatchListModal />
    </div>
  );
};

export default CreatorLayout;
