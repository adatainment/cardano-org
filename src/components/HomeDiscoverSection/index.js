import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import DottedImageWithButton from '@site/src/components/Layout/DottedImageWithButton';
import QuoteWithText from '@site/src/components/Layout/QuoteWithText';

const DiscoverItemList = [
  {
    imageName: 'people',
    buttonLabel: 'People',
    buttonLink: 'discover-cardano#people'
  },
  {
    imageName: 'purpose',
    buttonLabel: 'Purpose',
    buttonLink: 'discover-cardano#purpose'
  },
  {
    imageName: 'research',
    buttonLabel: 'Research',
    buttonLink: 'discover-cardano#research'
  },
  {
    imageName: 'technology',
    buttonLabel: 'Technology',
    buttonLink: 'discover-cardano#technology'
  },
  {
    imageName: 'opportunity',
    buttonLabel: 'Opportunity',
    buttonLink: 'discover-cardano#opportunity'
  },
];

function DiscoverItem({imageName, buttonLabel, buttonLink}) {
  return (
       
        <DottedImageWithButton
            imageName={imageName}
            buttonLabel={buttonLabel}
            buttonLink={buttonLink}
        />
       
  );
}

export default function HomeDiscoverSection() {
  return (
    <section className="container">
    <div className={styles.discoverWrap}>
      <div className={styles.discoverItems}>
        
          {DiscoverItemList.map((props, idx) => (
            <DiscoverItem key={idx} {...props} />
          ))}
      </div>
    </div> 
    <div className={styles.quoteWrap}>
      <QuoteWithText
          text='We have changed science. We have changed what it means to build global systems and sustainable models of exchange and governance.' 
          quoteType='mixed'
      />   
    </div>
    <div className={styles.quoteWrap}>
    <QuoteWithText
          text='We, alongside our community and partners, are defining a new future: a decentralized future without intermediaries, in which power is returned to the individual.' 
          quoteType='none'
      />
    </div>
    </section>
  );
}
