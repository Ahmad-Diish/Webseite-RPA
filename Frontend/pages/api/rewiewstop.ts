import type { NextApiRequest, NextApiResponse } from 'next';
// pages/api/reviews/top.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const reviews = [
    { id: 1, title: "Review 1", content: "Content for Review 1", continuation: "Continuation for Review 1" },
    { id: 2, title: "Review 2", content: "Content for Review 2", continuation: "Continuation for Review 2" },
    { id: 3, title: "Review 3", content: "Content for Review 3", continuation: "Continuation for Review 3" },
  ];

  res.status(200).json(reviews);
}
