
const getByTestId = (testId) => {
    return  cy.get(`[data-testid="${testId}"]`)
}

const getByClassName = (className) => {
    return  cy.get(`.${className}`)
}

const getByNameId = (nameId) => {
    return cy.get(`#${nameId}`)
}

const getByHrefLink = (hrefLink) => {
    return cy.get(`a${hrefLink}`)
}

const visitByLinkUrl = (linkUrl) => {
    return cy.visit(`${linkUrl}`)
}
const dom = {
    getByTestId, 
    getByClassName,
    getByNameId,
    visitByLinkUrl,

}; 





export default dom 