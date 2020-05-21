describe("testing our form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/component");
  });
  it("Finds the Named Input", () => {
    cy.get('input[name="name"]')
      //
      //.check("length gt.than 2")
      .type("Dipesh Koirala")
      .should("have.value", "Dipesh Koirala");

    cy.get('input[type="checkbox"]').check().should("be.checked");
    //cy.get('input[name="saucechoice"]').type("Spinac Alfredo");
    //   cy.get('input[name="email"]').type("dipeshkoirala@gmail.com");

    //   cy.get('input[type="checkbox"]').check().should("be.checked");
    //   cy.contains("Submit").click();
    //Arrange
    //Act
    //Assert
    cy.contains("Submit").click();
  });
});
//.check().should('be.checked')
