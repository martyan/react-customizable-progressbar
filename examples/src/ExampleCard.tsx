import React, { PropsWithChildren } from 'react';
import { ExternalLinkIcon } from './icons';

interface Props extends PropsWithChildren {
  title: string;
  href: string;
}

const ExampleCard = ({ title, href, children }: Props) => (
  <div className="basis-[256px] shrink-0 grow-0 py-[5px] px-[15px] bg-white rounded-[5px] m-[30px]">
    <div className="flex justify-between items-center py-[15px] px-[5px] mb-5 font-normal uppercase text-[#666] border-b border-[#f5f5f5] text-[0.85em]">
      <span className="flex-1 mr-[10px]">{title}</span>
      <a
        href={href}
        target="_blank"
        className="flex items-center gap-1 no-underline text-[#ccc] text-[0.9em]"
      >
        <span>code</span>
        <ExternalLinkIcon />
      </a>
    </div>

    {children}
  </div>
);

export default ExampleCard;
