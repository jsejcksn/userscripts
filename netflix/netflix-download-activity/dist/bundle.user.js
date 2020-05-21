// ==UserScript==
// @name        Netflix: Download activity
// @version     1.0.4
// @description Download your Netflix ratings or viewing activity as a JSON-formatted file
// @license     MIT
// @author      Jesse Jackson
// @match       https://www.netflix.com/moviesyouveseen
// @match       https://www.netflix.com/MoviesYouveSeen
// @match       https://www.netflix.com/settings/rated/*
// @match       https://www.netflix.com/settings/viewed/*
// @match       https://www.netflix.com/viewingactivity
// @namespace   https://github.com/jsejcksn
// @noframes
// @run-at      document-idle
// ==/UserScript==

(() => {
  'use strict';

  const wait = ms => new Promise(res => setTimeout(res, ms));

  const saveData = (obj, fileName) => {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const json = JSON.stringify(obj);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const init = async () => {
    const halfSecond = 500;
    const confirmationMessage = activity.type === activity.types.RATINGS ? 'Download ratings activity?' : 'Download viewing activity?';
    // eslint-disable-next-line no-alert
    if (confirm(confirmationMessage)) {
      const button = document.querySelector('button.btn.btn-blue.btn-small');

      while (!button.classList.contains('disabled')) {
        button.click();
        await wait(halfSecond);
        scrollTo(0, document.body.scrollHeight);
      }

      const results = [];
      const items = document.querySelectorAll('.retableRow');

      for (const item of items) {
        const data = {};
        const idStartIndex = 30;
        data.id = item.querySelector('.col.title > a').href.slice(idStartIndex);
        data.title = item.querySelector('.col.title > a').textContent;

        data.date = item.querySelector('.col.date').textContent.split('/').map((val, i) => {
          const padLength = 2;
          if (i !== padLength) return val.padStart(padLength, '0');
          return `20${val}`;
        }).sort((a, b) => {
          const targetLength = 4;
          if (a.length === targetLength) return -1;
          else if (b.length === targetLength) return 1;
          return 0;
        }).join('-');

        if (activity.type === activity.types.RATINGS) {
          data.rating_stars = null;
          data.rating_thumbs = null;

          if (item.querySelector('.col.rating > .starbar')) {
            const maxStars = 5;
            let filled = 0;
            let empty = 0;
            const stars = item.querySelectorAll('.col.rating > .starbar > .icon-star');

            for (const star of stars) {
              if (star.classList.contains('personal')) filled += 1;
              if (star.classList.contains('sb-placeholder')) empty += 1;
            }

            if (filled) data.rating_stars = filled;
            else if (empty === maxStars) data.rating_stars = 0;
          }
          else if (item.querySelector('.col.rating > .thumbs-component')) {
            const thumbs = item.querySelector('.col.rating > .thumbs-component');
            if (thumbs.classList.contains('rated-up')) data.rating_thumbs = 'up';
            if (thumbs.classList.contains('rated-down')) data.rating_thumbs = 'down';
          }
        }

        results.push(data);
      }

      const date = new Date();
      const dateFormatted = `${date.toISOString().split('.')[0].split('-').join('').split(':').join('')}Z`;
      let profileName = 'Unknown';
      try {
        profileName = document.querySelector('img.activeProfile').getAttribute('alt');
      }
      catch {}

      const data = {
        profile: profileName,
        results,
        timestamp: date.toISOString(),
        type: activity.type,
      };

      saveData(data, `netflix-activity-${activity.type}-${profileName.toLowerCase()}-${dateFormatted}.json`);
    }
  };

  const activity = {
    types: {
      RATINGS: 'ratings',
      VIEWS: 'views',
    },
  };

  const reRatings = /^\/(?:settings\/rated|moviesyouveseen).*/u;
  const reViews = /^\/(?:settings\/viewed|viewingactivity).*/u;

  if (reRatings.test(location.pathname.toLowerCase())) {
    activity.type = activity.types.RATINGS;
  }
  else if (reViews.test(location.pathname.toLowerCase())) {
    activity.type = activity.types.VIEWS;
  }
  else throw new Error(`Activity type couldn't be determined by URL`);

  init();

  const selector = document.querySelector('.pageToggle');
  selector.addEventListener('click', async () => {
    const halfSecond = 500;
    await wait(halfSecond);
    if (selector.querySelector('.choice.icon.rating').nodeName === 'SPAN') {
      activity.type = activity.types.RATINGS;
      init();
    }
    else if (selector.querySelector('.choice.icon').nodeName === 'SPAN') {
      activity.type = activity.types.VIEWS;
      init();
    }
  });
})();
