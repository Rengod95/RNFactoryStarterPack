import {InitializationSingleTon} from '@/Service/shared.ts';
import {RouteMeta} from '@/Service/Outbound/Route/Types.ts';

export class RouteService extends InitializationSingleTon<RouteService> {
  private routeMetas: RouteMeta[] = [];

  public addRouteMeta(meta: RouteMeta) {
    this.routeMetas.push(meta);
  }

  public getRouteMap() {
    return this.routeMetas;
  }
}
