import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FooterColumn from './FooterColumn';

const Footer = () => {
  const FooterColumn1 = [
    {label: `Contact`,link: `#`},
    {label: `Apply as Creator`,link: `#`},
    {label: `Community`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
  ];
  const FooterColumn2 = [
    {label: `Creator Teaser`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
  ];
  const FooterColumn3 = [
    {label: `Superfan Teaser`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
    {label: `Coming Soon`,link: `#`},
  ];
  const FooterColumn4 = [
    {label: `Newsroom`,link: `#`},
    {label: `Investors`,link: `#`},
    {label: `Careers`,link: `#`},
    {label: `Coming Soon`,link: `#`},
  ];

  return (
    <div className={`footer bg-bg_footer py-9 px-16`}>
      <div className={`grid grid-cols-4 gap-4 mb-6`}>
        <div className={`text-sm`} id={`footer_column_1`}>
          <FooterColumn transaction={FooterColumn1} title={`Help`} />
        </div>
        <div className={`text-sm`} id={`footer_column_2`}>
          <FooterColumn transaction={FooterColumn2} title={`Creators`} />
        </div>
        <div className={`text-sm`} id={`footer_column_3`}>
          <FooterColumn transaction={FooterColumn3} title={`Superfans`} />
        </div>
        <div className={`text-sm`} id={`footer_column_4`}>
          <FooterColumn transaction={FooterColumn4} title={`About`} />
        </div>
      </div>

      <div class="w-full border-t border-gray-400"></div>

      <div className={`flex justify-between items-center mt-6`}>
        <div className={`flex text-gray-300 text-sm`}>
          <span>© 2022 Superjoi, Inc.</span>
          <span className={`mx-2`}>·</span>
          <a href={`#`} className={`text-gray-300 hover:text-white`}>Privacy</a>
          <span className={`mx-2`}>·</span>
          <a href={`#`} className={`text-gray-300 hover:text-white`}>Terms</a>
          <span className={`mx-2`}>·</span>
          <a href={`#`} className={`text-gray-300 hover:text-white`}>Company details</a>
        </div>
        <div className={`flex text-xs`}>
          <button className={`text-gray-300 font-bold underline normal-case mr-3`}>English</button>
          <button className={`text-gray-300 font-bold mr-9`}>€ <span className={`underline`}>EUR</span></button>
          <div className={`h-5 w-5 bg-white border-2 border-gray-200 mr-3`}></div>
          <div className={`h-5 w-5 bg-white border-2 border-gray-200 mr-3`}></div>
          <div className={`h-5 w-5 bg-white border-2 border-gray-200`}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
