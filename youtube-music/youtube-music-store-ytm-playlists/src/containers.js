import {createContainerShadow} from 'container-shadow';
import createEmotion from '@emotion/css/create-instance';
import cssText from '!!raw-loader!./base.css';
import keys from './keys';

const targets = [
  {
    key: keys.one,
    position: 'end',
    style: 'position: fixed; top: 0; right: 64px; z-index: 100;',
    target: document.body,
  },
];

const {containers, emotions} = targets.reduce(
  (acc, {key, position, style, target}) => {
    const {componentRoot: container, shadowRoot} =
      createContainerShadow({cssText, position, style, target});
    const emotion = createEmotion({container: shadowRoot, key});
    acc.containers[key] = container;
    acc.emotions[key] = emotion;
    return acc;
  },
  {containers: {}, emotions: {}},
);

export {
  containers,
  emotions,
};
