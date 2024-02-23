/*************************************
 * @auth    Douglas Madzier
 * @date    Tuesday, February 20, 2024
 * @file    CS-133J Mid-Term
 *************************************/

window.onload = function () {
  // Variables scoped to the window.onload event.
  const destination = $('selDestination');
  const pTax = $('pTax');
  const pFee = $('pFee');
  const pTotal = $('pTotal');
  const pTicketCost = $('pTicketCost');
  let txtNumTickets = $('txtNumTickets');
  let price;

  // Triggers on change of the <select> element.
  destination.onchange = function () {
    // Gets the airport id codes from the option item.
    let airportCode = $('selDestination').value;
    console.log('airportCode', airportCode);

    // Checks for airport code and associates it with a price.
    // Checks to make sure default in not chosen.
    // Should eventually be a loop with an array.
    switch (airportCode) {
      // Sacramento, CA
      case 'sck':
        price = 144.75;
        console.log('sck: ', price);
        break;
      // Houston, TX
      case 'iah':
        price = 576.75;
        console.log('ish: ', price);
        break;
      // Medford, OR
      case 'mfr':
        price = 68.0;
        console.log('mfr: ', price);
        break;
      // Los Angeles, CA
      case 'lax':
        price = 240.75;
        console.log('lax: ', price);
        break;
      // Alerts if default is selected.
      default:
        alert(`Sorry, please choose a destination.`);
    }
  };

  // Triggers on input of the <input> element.
  txtNumTickets.oninput = function () {
    // Declare local variables for this function.
    let ticketCost;
    let calcTax;
    let calcFee;
    let calcTotalCost;
    let txtNumTickets = $('txtNumTickets').value;
    console.log('NumTickets', txtNumTickets);

    // Checks that ticket number is a positive integer.
    if (isNaN(txtNumTickets) || txtNumTickets <= 0) {
      alert('Please enter a positive number.');
    }

    // Calculate the total price for just tickets.
    ticketCost = txtNumTickets * price;
    console.log('Total ', ticketCost);

    // Calculate the tax for the tickets.
    calcTax = ticketCost * 0.015;
    console.log('Tax ', calcTax);

    // Calculate the security fee for the tickets,
    calcFee = txtNumTickets * 15.0;
    console.log('Fee ', calcFee);

    // Calculate the total cost with taxes and fees.
    calcTotalCost = ticketCost + calcTax + calcFee * 1;
    // Inserts the data values into the HTML code.
    pTicketCost.innerHTML = '<p>Ticket cost: $' + ticketCost.toFixed(2) + '</p>';
    pTax.innerHTML = '<p>Transportation tax: $' + calcTax.toFixed(2) + '</p>';
    pFee.innerHTML = '<p>Security fee: $' + calcFee.toFixed(2) + '</p>';
    pTotal.innerHTML = '<p>Total cost: $' + calcTotalCost.toFixed(2) + '</p>';
  };

  /**
   * @file    $
   * @param   getId
   * @retrn   elId
   * Retrieves the element ids from index.html.
   */
  function $(getId) {
    elId = window.document.getElementById(getId);
    return elId;
  }
};
