Cypress.Commands.add('Myexpecting', (value, valueTwo) => {
    expect(value).to.eq(valueTwo);
})