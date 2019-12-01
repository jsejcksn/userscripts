import {h, render} from 'preact';
import {containers} from './containers';
import keys from './keys';
import {storageData} from './storage-data';
import {trees} from './trees';

storageData.get();
render(h(trees[keys.one]), containers[keys.one]);
