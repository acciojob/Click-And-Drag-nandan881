describe('Drag and Drop Cubes', () => {
  it('should drag the cube inside the container', () => {
    cy.visit('http://localhost:3000'); // Adjust URL if necessary
    cy.get('.items') // Select the elements with the 'items' class
      .first() // Grab the first cube
      .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
      .trigger('mousemove', { pageX: 271, pageY: 391 })
      .trigger('mouseup', { force: true });

    // Verify the cube position (you can adjust the scrollLeft validation as needed)
    cy.get('.items').first().should(($item) => {
      const cubeRect = $item[0].getBoundingClientRect();
      expect(cubeRect.left).to.be.greaterThan(0); // Example assertion, adjust as per your logic
    });
  });
});
