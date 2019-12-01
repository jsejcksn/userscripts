const createContainerShadow = ({
  cssText = '',
  inlineBlock,
  position,
  style = '',
  target,
}) => {
  if (!(target instanceof HTMLElement)) throw new Error('"target" type must be "HTMLElement"');
  if (typeof cssText !== 'string') throw new Error('"cssText" type must be "string"');
  if (typeof style !== 'string') throw new Error('"style" type must be "string"');

  let insertionPosition;
  switch (position) {
    case 'before': {
      insertionPosition = 'beforebegin';
      break;
    }
    case 'begin': {
      insertionPosition = 'afterbegin';
      break;
    }
    case 'after': {
      insertionPosition = 'afterend';
      break;
    }
    default: {
      insertionPosition = 'beforeend';
    }
  }

  const containerElement = document.createElement('div');
  containerElement.style =
    `all:initial;display:${inlineBlock ? 'inline-' : ''}block;${style}`;
  const shadowRoot = containerElement.attachShadow({mode: 'open'});
  if (cssText) {
    shadowRoot
      .appendChild(document.createElement('style'))
      .textContent = cssText;
  }

  target.insertAdjacentElement(
    insertionPosition,
    containerElement,
  );
  return shadowRoot;
};

export {
  createContainerShadow,
  createContainerShadow as default,
};
