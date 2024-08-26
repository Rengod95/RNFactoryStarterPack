import {SafeAreaView} from 'react-native';

import NavigationContainerProvider from './src/View/BootStrap/NavigationContainerProvider';
import Entry from './src/View/BootStrap/Entry';

import {GlobalStoreProvider} from './src/View/BootStrap/GlobalStoreProvider';
import {useInitializeServices} from './src/View/BootStrap/hooks/useInitializeApp';

function App(): React.JSX.Element {
  useInitializeServices();

  return (
    <GlobalStoreProvider>
      <NavigationContainerProvider>
        <SafeAreaView style={{flex: 1}}>
          <Entry />
        </SafeAreaView>
      </NavigationContainerProvider>
    </GlobalStoreProvider>
  );
}

export default App;
