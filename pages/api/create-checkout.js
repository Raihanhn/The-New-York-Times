export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;

  const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          product_id: process.env.LEMONSQUEEZY_PRODUCT_ID,
          email,
        },
      },
    }),
  });

  const checkout = await response.json();
  res.status(200).json({ url: checkout.data.attributes.url });
}
