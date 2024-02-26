let currentID;

export default async function displayRazorpay(onPaymentSuccess) {
  const data = await fetch("https://msdca-backend.onrender.com/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "School Premier League",
    description: "Registration Fee Payment",
    image: "https://iili.io/J1H4sDX.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
      currentID = response.razorpay_payment_id;
      // Execute the callback function with paymentId
      onPaymentSuccess(response.razorpay_payment_id, response.razorpay_order_id);

      // Redirect user to Registered component after successful payment
      // window.location.href = "/Registered";
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export { currentID };
