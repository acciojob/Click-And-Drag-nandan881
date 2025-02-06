describe('Drag and Scroll Test', () => {
  it('should drag the item and verify scroll position', () => {
    // Wait for the `.items` element to appear in the DOM
    cy.get('.items', { timeout: 10000 }) // Increase timeout to 10 seconds
      .should('exist') // Ensure the element exists
      .and('be.visible'); // Ensure the element is visible

    // Trigger mousedown, mousemove, and mouseup to simulate dragging
    cy.get('.items')
      .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 }) // Start dragging
      .trigger('mousemove', { pageX: 271, pageY: 391 }) // Drag to a new position
      .trigger('mouseup', { force: true }); // Release the mouse

    // Verify that the scrollLeft property has increased
    cy.get('.items').should(($items) => {
      expect($items[0].scrollLeft).to.be.greaterThan(0); // Assert scrollLeft > 0
    });
  });
});
