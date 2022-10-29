let Events = require('../src/Events');

describe("The Events Class", () => {

    beforeEach(function() {
        Events.reset();
    });

    it("returns true if the Events class exists", () => {
        expect(Events).toBeDefined();
    });

});