import {observer} from 'mobx-react-lite';
import {Text, View} from 'react-native';
import {useGlobalStore} from '@/Service/Outbound/Store/Adapter.ts';

const Entry = observer(() => {
  const ApplicationStore = useGlobalStore('ApplicationStore');

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      {ApplicationStore.isApplicationInitialized ? <Text>초기화됌</Text> : <Text>초기화 안됌</Text>}
    </View>
  );
});

export default Entry;
