let Events = require('../src/Events');

describe("The Events Class", () => {

    const defaultListener = {listenerId: "test-listener-1", eventId: "test-event", response: (e) => {}};

    beforeEach(function() {
        Events.reset();
    });

    it("returns true if the Events class exists", () => {
        expect(Events).toBeDefined();
    });

    it("adds an item to listeners if subscribing a new listener", () => {
       const initialNumOfListeners = Object.values(Events.getListeners()).length;
       Events.subscribe(defaultListener);
       const newNumOfListeners = Object.values(Events.getListeners()).length;
       const difference = newNumOfListeners - initialNumOfListeners;

       expect(difference).toEqual(1);
    });



});