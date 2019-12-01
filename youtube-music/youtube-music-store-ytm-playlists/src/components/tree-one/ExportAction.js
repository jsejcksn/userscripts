import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import MaterialIcon from './MaterialIcon';
import {storageData} from '../../storage-data';

const {css} = emotions[keys.one];

const ExportAction = () => {
  const styles = {};
  styles.component = css`
    background-color: var(--color-grey);
    color: var(--color-light);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5em;

    &:hover {
      color: var(--color-dark);
    }

    &:active {
      color: var(--color-red);
    }
  `;
  styles.span = css`
    margin-left: 0.5em;
  `;

  const exportData = () => {
    const saveData = (obj, fileName) => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.setProperty('display', 'none');
      const json = JSON.stringify(obj);
      const blob = new Blob([json], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    };

    const timestamp = (() => {
      const date = new Date();
      const pad2DigitString = n => {
        const padLength = 2;
        return `${n}`.padStart(padLength, '0');
      };
      return [
        date.getUTCFullYear(),
        pad2DigitString(date.getUTCMonth() + 1),
        pad2DigitString(date.getUTCDate()),
        'T',
        pad2DigitString(date.getUTCHours()),
        pad2DigitString(date.getUTCMinutes()),
        pad2DigitString(date.getUTCSeconds()),
        'Z',
      ].join('');
    })();

    saveData(storageData.export(), `ytm-playlists-export-${timestamp}.json`);
  };

  return h(
    'div',
    {
      class: styles.component,
      onClick: exportData,
    },
    h(MaterialIcon, {name: 'save_alt'}),
    h('span', {class: styles.span}, 'Export data'),
  );
};

export default ExportAction;
