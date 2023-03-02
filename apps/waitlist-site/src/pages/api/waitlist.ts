import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  error?: any;
  status: string;
};

function isValiEmail(email: string) {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    return false;
  }

  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(500).json({
      error: {
        type: "INVALID_METHOD",
        message: "Bad req method not allowed",
      },
      status: "ERROR",
    });
  } else if (!req.body.email) {
    return res.status(500).json({
      error: {
        type: "EMAIL_EMPTY",
        message: "Email required",
      },
      status: "ERROR",
    });
  } else if (!isValiEmail(req.body.email)) {
    return res.status(500).json({
      error: {
        type: "INVALID_EMAIL",
        message: "Please enter a valid email",
      },
      status: "ERROR",
    });
  }

  try {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const createPage = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DB_ID as string },
      properties: {
        [process.env.NOTION_COL_EMAIL_ID as string]: {
          title: [
            {
              type: "text",
              text: {
                content: req.body.email,
              },
            },
          ],
        },
      },
    });

    if (createPage) {
      return res.status(200).json({ status: "SUCCESS" });
    } else {
      return res.status(500).json({
        error: {
          type: "SERVER_ERROR",
          message: "Something went wrong please try again",
        },
        status: "ERROR",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error,
      status: "ERROR",
    });
  }
}
