import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import {storageData} from '../../storage-data';

const {css} = emotions[keys.one];

const ExportAction = () => {
  const styles = {};
  styles.component = css`
    background-color: var(--color-grey);
    color: var(--color-light);
    cursor: pointer;
    display: block;
    margin-bottom: 0.25em;
    padding: 0.5em;
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
    'Export data',
  );
};

export default ExportAction;
