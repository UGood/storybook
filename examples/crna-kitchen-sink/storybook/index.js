import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  // host: 'localhost',
  onDeviceUI: true,
});

setTimeout(
  () =>
    setOptions({
      name: 'CRNA React Native App',
    }),
  100
);

export default StorybookUI;
