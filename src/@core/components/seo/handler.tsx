import { parse } from 'node-html-parser';
import { NextApiRequest, NextApiResponse } from 'next';

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { url } = req.query;

  try {
    const html = await fetchHtml(url as string);
    const rootNode = parse(html);

    const titleNode = rootNode.querySelector('title');
    const descriptionNode = rootNode.querySelector('meta[name="description"]');
    const keywordsNode = rootNode.querySelector('meta[name="keywords"]');

    const seoResult = {
      title: titleNode?.text,
      description: descriptionNode?.getAttribute('content'),
      keywords: keywordsNode?.getAttribute('content')?.split(',').map((s) => s.trim()) ?? [],
    };

    res.status(200).json(seoResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
