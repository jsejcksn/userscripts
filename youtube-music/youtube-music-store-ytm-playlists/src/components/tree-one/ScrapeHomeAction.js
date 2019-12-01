import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import MaterialIcon from './MaterialIcon';
import {storageData} from '../../storage-data';

const {css} = emotions[keys.one];

const ScrapeHomeAction = () => {
  const styles = {};
  styles.component = css`
    background-color: var(--color-grey);
    color: var(--color-light);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5em;

    &:hover {
      background-color: var(--color-dark-grey);
    }

    &:active {
      color: var(--color-red);
    }
  `;
  styles.span = css`
    margin-left: 0.5em;
  `;

  const handleClick = () => {
    storageData.scrapeHome();
    storageData.set();
  };

  return h(
    'div',
    {
      class: styles.component,
      onClick: handleClick,
    },
    h(MaterialIcon, {name: 'archive'}),
    h('span', {class: styles.span}, 'Scrape home'),
  );
};

export default ScrapeHomeAction;
