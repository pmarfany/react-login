export interface IService {
  id?: string;
  name: string;
  selected?: boolean;
}

const Services: IService[] = [
  {
    id: 'owncloud',
    name: 'ownCloud',
  },
  {
    id: 'kodi',
    name: 'Kodi',
    selected: true,
  },
  {
    id: 'torrent',
    name: 'Torrent',
  },
];

export default Services;