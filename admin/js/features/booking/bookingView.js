export const renderBookingPage =
  () => {

    const page =
      document.getElementById(
        'pageContent'
      );

    page.innerHTML = `

<div class="d-sm-flex align-items-center justify-content-between mb-4">

  <h1 class="h3 mb-0 text-gray-800">
    Bookings
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
<th>Phone</th>
<th>Email</th>
            <th>Persons</th>

            <th>Date</th>

           

            <th>Status</th>

          </tr>

        </thead>

        <tbody id="bookingTableBody">
        </tbody>

      </table>

    </div>

  </div>

</div>
`;
  };
  export const renderBooking =
 booking => {

    const tbody =
      document.getElementById(
        'bookingTableBody'
      );

    tbody.innerHTML =
      booking
        .map(
          book => `

<tr>

<td>
  ${book.name}
</td>



<td>
   ${book.phone}
</td>
<td>
  ${book.email}
</td>
<td>
  ${book.persons}
</td>
<td>
   ${book.date}
</td>



<td>

<select
  class="form-control booking-status-select"

  data-id="${book._id}"
>

  <option
    value="pending"

    ${
      book.status ===
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
      book.status ===
      'confirmed'
        ? 'selected'
        : ''
    }
  >
    Confirmed
  </option>

  <option
    value="cancelled"

    ${
      book.status ===
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