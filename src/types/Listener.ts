import HexEvent from './HexEvent';

type Listener = {
  listenerId: string;
  eventId: string;
  response: (e: HexEvent) => void;
};

export default Listener;
