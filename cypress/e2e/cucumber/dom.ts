
const getByTestId = (testId) => {
    return  cy.get(`[data-testid="${testId}"]`)
}

const getByClassName = (className) => {
    return  cy.get(`.${className}`)
}

const dom = {
    getByTestId, 
    getByClassName,
}; 





export default dom 