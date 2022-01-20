describe('shared-ui-layout: SharedUiLayout component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduilayout--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedUiLayout!');
    });
});
