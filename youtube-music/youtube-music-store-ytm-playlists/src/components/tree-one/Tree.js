import {emotions} from '../../containers';
import ExportAction from './ExportAction';
import {h} from 'preact';
import keys from '../../keys';
import ScrapeHomeAction from './ScrapeHomeAction';
import ScrapeSearchAction from './ScrapeSearchAction';
import {useState} from 'preact/hooks';
import VisibilityToggle from './VisibilityToggle';

const {css} = emotions[keys.one];

const Tree = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(bool => !bool);

  const styles = {};
  styles.component = css`
    --color-dark: #282828;
    --color-grey: #606060;
    --color-light: #ffffff;
    --color-red: #ff0000;
    --font-mono: 'Roboto Mono', monospace;
    --font-sans: 'Roboto', sans-serif;
    --font-size: 16px;
    --transition-long: 800ms;
    --transition-short: 200ms;
    
    color: var(--color-light);
    font-family: var(--font-sans);
    font-size: var(--font-size);
  `;
  styles.content = css`
    background-color: var(--color-grey);
    display: ${visible ? 'block' : 'none'};
  `;

  return h(
    'div',
    {class: styles.component},
    h(
      'div',
      {class: styles.content},
      h(ScrapeHomeAction),
      h(ScrapeSearchAction),
      h(ExportAction),
    ),
    h(VisibilityToggle, {toggleVisibility, visible}),
  );
};

export default Tree;
