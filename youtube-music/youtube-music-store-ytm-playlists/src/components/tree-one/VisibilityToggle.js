import {emotions} from '../../containers';
import {h} from 'preact';
import keys from '../../keys';
import MaterialIcon from './MaterialIcon';

const {css} = emotions[keys.one];

const VisibilityToggle = props => {
  const styles = {};
  styles.component = css`
    display: flex;
  `;
  styles.toggle = css`
    background-color: var(--color-grey);
    border-bottom-left-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    color: var(--color-light);
    cursor: pointer;
    margin-left: auto;
    padding-top: 2px;

    &:hover {
      color: var(--color-dark);
    }

    &:active {
      color: var(--color-red);
    }
  `;

  return h(
    'div',
    {class: styles.component},
    h(
      'div',
      {
        class: styles.toggle,
        onClick: props.toggleVisibility,
      },
      props.visible
        ? h(MaterialIcon, {name: 'keyboard_arrow_up'})
        : h(MaterialIcon, {name: 'keyboard_arrow_down'}),
    ),
  );
};

export default VisibilityToggle;
