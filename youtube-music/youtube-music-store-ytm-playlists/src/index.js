import {h, render} from 'preact';
import {containers} from './containers';
import keys from './keys';
import {storageData} from './storage-data';
import {trees} from './trees';

// Add fonts to light DOM
document.head.appendChild(document.createElement('style')).textContent = `
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap&subset=latin-ext');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`;

storageData.get();
render(h(trees[keys.one]), containers[keys.one]);
