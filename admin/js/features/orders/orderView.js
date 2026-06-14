export const renderOrdersPage =
  () => {

    const page =
      document.getElementById(
        'pageContent'
      );

    page.innerHTML = `

<div class="d-sm-flex align-items-center justify-content-between mb-4">

  <h1 class="h3 mb-0 text-gray-800">
    Orders
  </h1>

</div>

<div class="card shadow mb-4">

  <div class="card-body">

    <div class="table-responsive">

      <table
        class="table table-bordered"
      >

        <thead>

          <tr>

            <th>Customer</th>

            <th>Items</th>

            <th>Total</th>

            <th>Paid</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody id="ordersTableBody">
        </tbody>

      </table>

    </div>

  </div>

</div>
`;
  };
  export const renderOrders =
  orders => {

    const tbody =
      document.getElementById(
        'ordersTableBody'
      );

    tbody.innerHTML =
      orders
        .map(
          order => `

<tr>

<td>
  ${order.user?.name || ''}
</td>

<td>

  ${
    order.items
      .map(
        item => `

${item.name}

x${item.quantity}
`
      )
      .join('<br>')
  }

</td>

<td>
  SAR ${order.totalPrice}
</td>

<td>
  ${
    order.isPaid
      ? 'Paid'
      : 'Unpaid'
  }
</td>

<td>

<select
  class="form-control order-status-select"

  data-id="${order._id}"
>

  <option
    value="pending"

    ${
      order.status ===
      'pending'
        ? 'selected'
        : ''
    }
  >
    Pending
  </option>

  <option
    value="confirmed"

    ${
      order.status ===
      'confirmed'
        ? 'selected'
        : ''
    }
  >
    Confirmed
  </option>

  <option
    value="preparing"

    ${
      order.status ===
      'preparing'
        ? 'selected'
        : ''
    }
  >
    Preparing
  </option>

  <option
    value="out_for_delivery"

    ${
      order.status ===
      'out_for_delivery'
        ? 'selected'
        : ''
    }
  >
    Out For Delivery
  </option>

  <option
    value="delivered"

    ${
      order.status ===
      'delivered'
        ? 'selected'
        : ''
    }
  >
    Delivered
  </option>

  <option
    value="cancelled"

    ${
      order.status ===
      'cancelled'
        ? 'selected'
        : ''
    }
  >
    Cancelled
  </option>

</select>

</td>

</tr>
`
        )
        .join('');
  };