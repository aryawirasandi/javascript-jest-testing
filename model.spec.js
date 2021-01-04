import Model from "./model.js";

test("new works", () => {
    expect(new Model).toBeInstanceOf(Model);
})

test("model structure", () => {
    expect(new Model).toEqual(expect.objectContaining({
        $collection: expect.any(Array),
        record : expect.any(Function),
        all: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function)
    }))
});

describe("record", () => {
    const heroes = [
        {
            name : "Batman",
        },
        {
            name : "Black Panther"
        }
    ]
    test('can add data to the collection', () => {
        const model = new Model;
        model.record(heroes);
        expect(model.$collection).toEqual(heroes)
    });

    test("gets call when data pass to the model", () => {
        const spy = jest.spyOn(Model.prototype, "record");
        const model = new Model(heroes);
        expect(spy).toHaveBeenCalled();
        expect(model.$collection).toEqual(heroes);
        spy.mockRestore();
    });
})

