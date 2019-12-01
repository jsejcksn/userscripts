import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import {switchcase} from 'script-modules';

const {css} = emotions[keys.one];

const MaterialIcon = props => {
  const {color, name, size} = props;
  let pixels = 24;
  pixels = switchcase(size, {
    'extra large': 48,
    large: 36,
    medium: 24,
    small: 18,
  }, pixels);

  const styles = {};
  styles.component = css`
    color: ${color || 'inherit'};
    font-size: ${pixels}px;
  `;

  return h(
    'i',
    {class: ['material-icons', styles.component].join(' ')},
    name,
  );
};

export default MaterialIcon;
