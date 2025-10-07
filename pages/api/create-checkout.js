// pages/api/create-checkout.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const {
      LEMON_SQUEEZY_API_KEY,
      LEMON_SQUEEZY_STORE_ID,
      LEMON_SQUEEZY_VARIANT_ID,
    } = process.env;

    if (
      !LEMON_SQUEEZY_API_KEY ||
      !LEMON_SQUEEZY_STORE_ID ||
      !LEMON_SQUEEZY_VARIANT_ID
    ) {
      return res
        .status(500)
        .json({ error: "Missing LemonSqueezy environment variables" });
    }

    // Prepare the checkout request body
    const body = {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: { email }, // keep email here
          product_options: {
            redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, // redirect after success
            receipt_button_text: "Go to your account", 
          },
          checkout_options: {
            embed: false,
            media: true,
            logo: true,
            desc: true,
            discount: true,
            skip_trial: false,
            subscription_preview: true,
            button_color: "#7047EB", // Example color
          },
        },
        relationships: {
          store: {
            data: { type: "stores", id: String(LEMON_SQUEEZY_STORE_ID) },
          },
          variant: {
            data: { type: "variants", id: String(LEMON_SQUEEZY_VARIANT_ID) },
          },
        },
      },
    };

    // Make the API request to create the checkout
    const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("🔥 LemonSqueezy Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(400).json({ error: data.errors || data });
    }

    const checkoutUrl = data?.data?.attributes?.url;
    if (!checkoutUrl) {
      return res.status(400).json({ error: "No checkout URL returned" });
    }

    return res.status(200).json({ url: checkoutUrl });
  } catch (error) {
    console.error("Error creating checkout:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
