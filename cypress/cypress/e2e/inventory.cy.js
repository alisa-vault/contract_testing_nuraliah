describe('Inventory API Tests', () => {
    const baseUrl = 'http://localhost:3000/items';

    it('should create a new item', () => {
        cy.request('POST', baseUrl, {
            name: 'Beef Stroganoff',
            quantity: 25,
            price: 19.99
        }).then(response => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Beef Stroganoff');
        });
    });

    it('should retrieve all items', () => {
        cy.request('GET', baseUrl).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    it('should retrieve a specific item', () => {
        cy.request('POST', baseUrl, {
            name: 'Chocolate Muffin',
            quantity: 40,
            price: 5.99
        }).then(postResponse => {
            const itemId = postResponse.body.id;
            cy.request('GET', `${baseUrl}/${itemId}`).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('Chocolate Muffin');
            });
        });
    });

    it('should update an existing item', () => {
        cy.request('POST', baseUrl, {
            name: 'Fruit Yoghurt',
            quantity: 35,
            price: 7.99
        }).then(postResponse => {
            const itemId = postResponse.body.id;
            cy.request('PUT', `${baseUrl}/${itemId}`, {
                name: 'Updated Fruit Yoghurt',
                quantity: 40,
                price: 8.99
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('Updated Fruit Yoghurt');
            });
        });
    });

    it('should delete an item', () => {
        cy.request('POST', baseUrl, {
            name: 'Gruyère Omelette',
            quantity: 30,
            price: 14.99
        }).then(postResponse => {
            const itemId = postResponse.body.id;
            cy.request('DELETE', `${baseUrl}/${itemId}`).then(response => {
                expect(response.status).to.eq(204);
                cy.request({ method: 'GET', url: `${baseUrl}/${itemId}`, failOnStatusCode: false })
                  .then(getResponse => {
                      expect(getResponse.status).to.eq(404);
                  });
            });
        });
    });
});
