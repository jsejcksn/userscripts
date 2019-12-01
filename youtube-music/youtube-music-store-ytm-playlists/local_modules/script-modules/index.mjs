const appendLightStyles = cssText => {
  document.head
    .appendChild(document.createElement('style'))
    .textContent = cssText;
};

const querySelectorString = ({after = '', before = '', classes, id, type}) => {
  const combineClasses = array => ['', ...array].join('.');
  let queryString = before;
  if (typeof type === 'string') queryString += type.trim();
  if (typeof id === 'string') queryString += `#${id.trim()}`;
  if (Array.isArray(classes)) queryString += combineClasses(classes);
  else if (typeof classes === 'string') queryString += combineClasses(classes.split(' '));
  queryString += after;
  return queryString;
};

const switchcase = (value, cases, defaultCase) => {
  const valueString = String(value);
  const result = Object.keys(cases).includes(valueString)
    ? cases[valueString]
    : defaultCase;
  return typeof result === 'function' ? result() : result;
};

export {appendLightStyles, querySelectorString, switchcase};
