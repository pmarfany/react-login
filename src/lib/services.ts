interface IServiceList {
  [path: string]: IService;
}

export interface IService {
  id?: string;
  name: string;
  image: string;
}

export class Service {

  private static SERVICE_LIST: IServiceList = {
    'owncloud': {
      id: 'owncloud',
      name: 'ownCloud',
      image: '.'
    },
    'kodi': {
      id: 'kodi',
      name: 'Kodi',
      image: '.'
    },
    'torrent': {
      id: 'torrent',
      name: 'Torrent',
      image: '.'
    },
  };

  public static getDefaultService(): IService {
    return Service.SERVICE_LIST['owncloud'];
  }

  public static getServices(): IService[] {
    return Object.keys(Service.SERVICE_LIST).map((id: string) => (
      { id, ...Service.SERVICE_LIST[id] }
    ));
  }

}