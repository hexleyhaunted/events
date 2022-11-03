import HexEvent from './HexEvent';

type Listeners = Record<string, { eventId: string; response: (e: HexEvent) => void }>;

export default Listeners;
