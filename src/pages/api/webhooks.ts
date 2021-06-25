import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('evento recebido')

  res.json({ ok: true })
}

// install the stripe cli here https://stripe.com/docs/stripe-cli#install
// after the installation, run this command:
// ./stripe listen --forward-to localhost:3000/api/webhooks