import type { NextApiRequest, NextApiResponse } from 'next';
// pages/api/projects/top.ts


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects = [
    { id: 1, title: "Project 1", description: "Description for Project 1" },
    { id: 2, title: "Project 2", description: "Description for Project 2" },
    { id: 3, title: "Project 3", description: "Description for Project 3" },
  ];

  res.status(200).json(projects);
}

