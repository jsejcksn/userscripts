import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';

const {css} = emotions[keys.one];

const Button = props => {
  const styles = {};
  styles.component = css`
    background-color: blue;
    border-radius: 0.25em;
    color: white;
    padding: 0.5rem;
  `;

  return h(
    'button',
    {class: styles.component},
    props.text,
  );
};

export default Button;
