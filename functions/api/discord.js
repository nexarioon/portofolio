const MAX_MESSAGE_LENGTH = 1900;
const MAX_USERNAME_LENGTH = 80;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function normalizeField(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function onRequestPost({ request, env }) {
  const webhookUrl = env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return json({ success: false, error: "Webhook is not configured" }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: "Invalid JSON body" }, 400);
  }

  const message = normalizeField(body?.message, MAX_MESSAGE_LENGTH);
  const username = normalizeField(body?.username, MAX_USERNAME_LENGTH);

  if (!message) {
    return json({ message: "Message is required" }, 400);
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
        username: username || "anonymous",
      }),
    });

    if (!response.ok) {
      return json({ success: false, error: "Discord API error" }, 502);
    }

    return json({ success: true });
  } catch {
    return json({ success: false, error: "Discord request failed" }, 502);
  }
}
