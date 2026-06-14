import * as model
  from './orderModel.js';

import {
  renderOrdersPage,
  renderOrders
} from './orderView.js';

export const initOrders =
  async () => {

    renderOrdersPage();

    await loadOrders();

    initStatusUpdate();
  };

const loadOrders =
  async () => {

    const orders =
      await model.getOrders();

    renderOrders(orders);
  };

const initStatusUpdate =
  () => {

    document.addEventListener(
      'change',

      async e => {

        if (
          e.target.classList.contains(
            'order-status-select'
          )
        ) {

          await model.updateOrder(

            e.target.dataset.id,

            {
              status:
                e.target.value
            }
          );
        }
      }
    );
  };