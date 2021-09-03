describe('Qasir', function () {
    it('TC-01', function () {
        cy.visit('https://web.qasir.id/sign-in');
        cy.get('#sign-in-phonenumber').type('81331046443',{force:true}).should('have.value', '81331046443');
        cy.get('#password').type('080702',{force:true}).should('have.value','080702');
        cy.get('#submit-btn-signin').click();
        cy.get('[data-outlet-id="583742"]').click();
        cy.wait(10000);

        //menambahkan outlet baru
/*      cy.get(':nth-child(10) > a').click({force:true});
        cy.get('.bottom-sheet > .button').click({force:true});
        cy.get(':nth-child(1) > .col-xs-12 > .form-group > .form-control').type('ABC',{force:true}).should('have.value','ABC');
        cy.get(':nth-child(2) > .col-xs-12 > .form-group > .form-control').type('081331046443',{force:true}).should('have.value','081331046443');
        cy.get(':nth-child(3) > .col-xs-12 > .form-group > .form-control').type('Jalan Mawar',{force:true});
        cy.get('#select2-location_id-container').click({force:true});
        cy.get('.select2-search__field').type('kedungkandang',{force:true});
        cy.contains('Kedungkandang').click({force:true});
        cy.get('#submit_form').click({force:true});
        cy.get('.hidden-xs > .select-container > .select2 > .selection > .select2-selection').click({force:true}) */;
        
        //merubah profile pengguna
        cy.get('.user-dropdown').click({force:true});
        cy.get('.dropdown-menu > :nth-child(3) > a').click({force:true});   
        cy.get(':nth-child(3) > .col-md-8 > :nth-child(1) > :nth-child(1) > .form-group > .form-control').type('Keni',{force:true}).clear({force:true});
        cy.focused().clear({force:true});
        cy.get(':nth-child(3) > .col-md-8 > :nth-child(1) > :nth-child(1) > .form-group > .form-control').type('Vio',{force:true});
        cy.get(':nth-child(3) > .col-md-8 > :nth-child(4) > .col-xs-12 > .form-group > .button').click({force:true});
        cy.get('.menu > :nth-child(2) > a').click({force:true});
        })
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})
