import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website developing',
          type: 'deposit',
          category: 'Development',
          amount: 12000,
          createdAt: new Date('2021-02-20 09:00:00')
        },
        {
          id: 2,
          title: 'House rent',
          type: 'withdraw',
          category: 'Rent',
          amount: 500,
          createdAt: new Date('2021-05-02 09:00:00')
        },
        {
          id: 3,
          title: 'Purchase in the marketplace',
          type: 'withdraw',
          category: 'Marketplace',
          amount: 350,
          createdAt: new Date('2021-05-03 18:30:00')
        }        
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);