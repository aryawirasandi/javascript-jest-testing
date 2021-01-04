const user = {
    name : "Arya Wirasandis",
    age : 23,
    job : "front end"
};

test('user matches', () => {
    const userString = "{\"name\":\"Arya Wirasandi\",\"age\":23,\"job\":\"front end\"}";
    expect(user).toMatchSnapshot();
});
