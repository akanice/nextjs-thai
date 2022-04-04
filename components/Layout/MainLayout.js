import Header from '../Header/Superfan';
import Head from '../Common/Head';
import { useSelector } from 'react-redux';
import ChargeModal from '../Account/Creator/Element/ChargeModal';
import WatchListModal from 'components/WatchList/WatchListModal';
import SaveCampaignToWatchlistModal from 'components/WatchList/SaveCampaignToWatchlistModal';
import React from 'react';

const MainLayout = ({ children, title }) => {
  const showChargeModal = useSelector((state) => state.payment?.showChargeModal);

  return (
    <div className={`bg-main-bg`}>
      <Head title={`PVComBank - ${title}`} />
      <Header className={`mb-12`} />
      <div className={`px-5 pt-32`}>{children}</div>
      <ChargeModal show={showChargeModal} />
      <WatchListModal />
    </div>
  );
};

export default MainLayout;
