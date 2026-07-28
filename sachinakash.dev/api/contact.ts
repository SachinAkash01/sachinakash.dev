import { handleContactRequest } from "../server/contact.js";

export default {
  async fetch(request: Request) {
    const result = await handleContactRequest({
      method: request.method,
      contentType: request.headers.get("content-type") ?? undefined,
      body: await request.text(),
      env: process.env,
    });

    return Response.json(result.body, {
      status: result.status,
      headers: {
        "Cache-Control": "no-store",
        ...result.headers,
      },
    });
  },
};

