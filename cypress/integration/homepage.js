
describe('Input form', () => {
  it('Homepage', () => {
    cy.visit("/")
  })

  it('Docs page', () => {
    cy.visit("/docs/intro")
    cy.contains('npm init docusaurus@latest my-website classic')
  })
})
