export class Login_Page{

    clickSignIn(){
        cy.get('.login').click()
    }

    enterEmail(myemail){
        cy.get('#email').type(myemail)
    }

    enterPassword(mypassword){
        cy.get('#passwd').type(mypassword)
    }

    clickLoginIn(){
        cy.get('#SubmitLogin > span').click()
    }

    verifyLoginUser(expectedName){
        cy.get('.account > span').should('have.text', expectedName )
    }

    clickSignOut(){
        cy.get('.logout').click()
    }



}

export const login = new Login_Page();