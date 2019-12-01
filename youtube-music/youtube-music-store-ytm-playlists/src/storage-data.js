import {querySelectorString} from 'script-modules';
import {version} from '../package';

const config = {
  storageKey: 'playlists-ytm-store',
  version,
};

const storageData = {
  lists: new Map(),
  version: config.version,
};

const sortByTitle = ([, a], [, b]) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
};

storageData.get = () => {
  const item = localStorage.getItem(config.storageKey);
  if (item === null) return;
  try {
    const {lists} = JSON.parse(item);
    for (const [k, v] of lists) storageData.lists.set(k, v);
  }
  catch (err) {
    storageData.string = item;
  }
  return storageData;
};

storageData.set = () => {
  const replacer =
    (key, value) => (key === 'lists' ? [...value].sort(sortByTitle) : value);
  const string = JSON.stringify(storageData, replacer);
  localStorage.setItem(config.storageKey, string);
  return string;
};

storageData.scrapeHome = () => {
  const isNodeYTMPlaylist = node => {
    const creatorSpanIndex = 2;
    const creatorSpan = [
      ...node.querySelectorAll([
        querySelectorString({type: 'div'}),
        querySelectorString({before: ' > ', type: 'span'}),
        querySelectorString({before: ' > ', type: 'yt-formatted-string'}),
        querySelectorString({before: ' > ', type: 'span'}),
      ].join('')),
    ][creatorSpanIndex];
    const anchor = node.querySelector([
      querySelectorString({type: 'div'}),
      querySelectorString({before: ' > ', type: 'yt-formatted-string'}),
      querySelectorString({before: ' > ', type: 'a'}),
    ].join(''));
    if (
      creatorSpan
      && creatorSpan.textContent === 'YouTube Music'
      && anchor
      && anchor.href
      && anchor.textContent
    ) return true;
    return false;
  };

  const mapListNodeToData = node => {
    const anchor = node.querySelector([
      querySelectorString({type: 'div'}),
      querySelectorString({before: ' > ', type: 'yt-formatted-string'}),
      querySelectorString({before: ' > ', type: 'a'}),
    ].join(''));
    try {
      const {href, textContent: title} = anchor;
      const re = (/list=(?<id>[^&]+)/u);
      const {groups: {id}} = re.exec(href);
      return [id, title.trim()];
    }
    catch (err) {
      return ['error', 'error'];
    }
  };

  const nodes = [...document.querySelectorAll(querySelectorString({type: 'ytmusic-two-row-item-renderer'}))];
  const lists = nodes
    .filter(isNodeYTMPlaylist)
    .map(mapListNodeToData);

  lists.forEach(([id, title]) => storageData.lists.set(id, title));
  return lists;
};

storageData.scrapeSearch = () => {
  const isNodeYTMPlaylist = node => {
    const creatorSpan = node.querySelector([
      querySelectorString({
        classes: 'flex-columns',
        type: 'div',
      }),
      querySelectorString({
        before: ' > ',
        classes: 'secondary-flex-columns',
        type: 'div',
      }),
      querySelectorString({before: ' > ', type: 'yt-formatted-string'}),
      querySelectorString({before: ' > ', type: 'span'}),
    ].join(''));
    const anchor = node.querySelector(querySelectorString({
      classes: 'yt-simple-endpoint style-scope ytmusic-responsive-list-item-renderer',
      type: 'a',
    }));
    if (
      creatorSpan
      && creatorSpan.textContent === 'YouTube Music'
      && anchor
      && anchor.href
      && anchor.getAttribute('aria-label')
    ) return true;
    return false;
  };

  const mapListNodeToData = node => {
    const anchor = node.querySelector(querySelectorString({
      classes: 'yt-simple-endpoint style-scope ytmusic-responsive-list-item-renderer',
      type: 'a',
    }));
    try {
      const {href} = anchor;
      const title = anchor.getAttribute('aria-label').trim();
      const re = (/list=(?<id>[^&]+)/u);
      const {groups: {id}} = re.exec(href);
      return [id, title];
    }
    catch (err) {
      return ['error', 'error'];
    }
  };

  const nodes = [
    ...document.querySelectorAll([
      querySelectorString({
        classes: 'style-scope ytmusic-shelf-renderer',
        id: 'contents',
      }),
      querySelectorString({before: ' > ', type: 'ytmusic-responsive-list-item-renderer'}),
    ].join('')),
  ];
  const lists = nodes
    .filter(isNodeYTMPlaylist)
    .map(mapListNodeToData);

  lists.forEach(([id, title]) => storageData.lists.set(id, title));
  return lists;
};

storageData.export = () => [...storageData.lists]
  .sort(sortByTitle)
  .map(([id, title]) => ({id, title}));

export {
  storageData as default,
  storageData,
};
