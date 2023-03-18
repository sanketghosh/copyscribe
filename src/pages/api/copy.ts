// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi } from "openai";
import { configuration } from "../utils/contants";

type Data = {
  result: string;
};

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `The customer has approached you, a marketing expert, to write a short and exciting marketing copy for their business on the topic of ${input}. Write a copy within 60 words.\n\nHere is the copy you came up with: `,
    temperature: 0.7,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const answer = response.data?.choices?.[0].text;

  if (answer === undefined) {
    throw new Error("No answer found. Please! try again.");
  }

  res.status(200).json({ result: answer });
}
