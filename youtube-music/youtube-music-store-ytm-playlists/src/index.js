import {h, render} from 'preact';
import {appendLightStyles} from 'script-modules';
import {containers} from './containers';
import keys from './keys';
import {storageData} from './storage-data';
import {trees} from './trees';

/*
 * Add fonts to light DOM because @font-face doesn't work properly yet in the
 * shadow DOM
 */
const lightStyles = `
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap&subset=latin-ext');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`;
appendLightStyles(lightStyles);

storageData.get();
render(h(trees[keys.one]), containers[keys.one]);
