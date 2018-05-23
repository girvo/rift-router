import { IRiftRoute } from './IRiftRoute';
export declare class RiftRouter {
  routes: any[];
  private index;
  private defaultRoute;
  path: string;
  params: any;
  search: any;
  active: any;
  constructor(myRoutes: IRiftRoute[]);
  riftRouterBrowserSync(): void;
  register(): number;
  riftTo(newPath: string, noUpdateBrowserHistory?: boolean): void;
  private updateActiveRoute();
  private setRoutes(routes, components?, parent?, hooks?);
  private checkMatch(route, currentPath);
  private queryString(querystring);
}