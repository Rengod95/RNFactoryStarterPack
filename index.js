import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import mediator from './src/Service/ServicesMediator';
import {RouteService} from './src/Service/Outbound/Route/Adapter';
import {AdvertisementService} from './src/Service/Outbound/Ad/Adapter';

mediator.registerServiceForInitialization(RouteService.getInstance());
mediator.registerServiceForInitialization(AdvertisementService.getInstance());

AppRegistry.registerComponent(appName, () => App);
