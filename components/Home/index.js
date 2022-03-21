import React, { useEffect, useState } from 'react';
import Banner from 'components/Home/Banner/Banner';
import TrendingCampaigns from 'components/Campaign/Sub/TrendingCampaigns';
import TrendingCreators from 'components/Creator/TrendingCreators';
import BecomeCreator from 'components/Home/Banner/BecomeCreator';
import ExploreCampaigns from 'components/Campaign/Sub/ExploreCampaigns';
import NewlyLaunchedCampaigns from 'components/Campaign/Sub/NewlyLaunchedCampaigns';
import PopularCampaigns from 'components/Campaign/Sub/PopularCampaigns';
import { useRouter } from 'next/router';
import CreatorSearch from 'components/Home/Banner/Sub/CreatorSearch';
import ContentSearch from 'components/Home/Banner/Sub/ContentSearch';

const Home = () => {
  const [creator, setCreator] = useState(``);
  const [creatorId, setCreatorId] = useState(``);
  const [contentType, setContentType] = useState([]);
  const [contentCategory, setContentCategory] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const query = router.query;
    if (query.creator) {
      setCreator(query.creator);
    }
    if (query.type) {
      setContentType([].concat(query.type));
    }
    if (query.creatorId) {
      setCreatorId(query.creatorId);
    }
    if (query.category) {
      setContentCategory([].concat(query.category));
    }
  }, [router.query]);

  const renderContentSearch = () => {
    if (creatorId !== `` || contentCategory.length || contentType.length) {
      return (
        <ContentSearch
          creatorId={creatorId}
          contentCategory={contentCategory}
          contentType={contentType}
        />
      );
    }
  };

  return (
    <div className={`flex flex-col bg-main-bg pb-36`}>
      <Banner />
      {!!creator && <CreatorSearch keyword={creator} />}
      {renderContentSearch()}
      <TrendingCampaigns />
      <TrendingCreators />
      <BecomeCreator />
      <ExploreCampaigns />
      <NewlyLaunchedCampaigns className={`px-16 mt-10`}/>
      <PopularCampaigns />
    </div>
  );
};

export default Home;
