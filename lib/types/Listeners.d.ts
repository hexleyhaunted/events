import HexEvent from "./HexEvent";
declare type Listeners = Record<string, {
    eventId: string;
    response: (e: HexEvent) => void;
}>;
export default Listeners;
