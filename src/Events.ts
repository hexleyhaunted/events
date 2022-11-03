import Listener from './types/Listener';
import Listeners from './types/Listeners';
import HexEvent from './types/HexEvent';

class Events {
  private static listeners: Listeners = {};

  static reset() {
    this.listeners = {};
  }

  static getListeners() {
    return this.listeners;
  }

  static subscribe(listener: Listener) {
    const { listenerId, eventId, response } = listener;
    this.listeners[listenerId] = { eventId, response };
  }

  static unsubscribe(listener: Listener) {
    delete this.listeners[listener.listenerId];
  }

  static send(event: HexEvent) {
    Object.values(this.listeners).forEach((listener) => {
      if (listener.eventId === event.id) {
        listener.response(event);
      }
    });
  }
}

export default Events;
