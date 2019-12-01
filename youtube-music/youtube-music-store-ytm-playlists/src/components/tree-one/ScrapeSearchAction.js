import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import {storageData} from '../../storage-data';

const {css} = emotions[keys.one];

const ScrapeSearchAction = () => {
  const styles = {};
  styles.component = css`
    background-color: var(--color-grey);
    color: var(--color-light);
    cursor: pointer;
    display: block;
    margin-bottom: 0.25em;
    padding: 0.5em;
  `;

  const handleClick = () => {
    storageData.scrapeSearch();
    storageData.set();
  };

  return h(
    'div',
    {
      class: styles.component,
      onClick: handleClick,
    },
    'Scrape search',
  );
};

export default ScrapeSearchAction;
