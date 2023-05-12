// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const result = await fetch('https://nextjs-starter-kit-2-webmonkey-sebastianroming-vtest314-billing.vercel.app/api/cache-test');
  
  const body = await result.json();
  console.log(body);

  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=300 stale-while-revalidate=59",
  );
  res.status(200).json({ result: body.time });
}
