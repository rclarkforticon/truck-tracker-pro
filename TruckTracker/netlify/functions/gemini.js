exports.handler = async (event) => {
  const apiKey = process.env.GEMINI_API_KEY; // This hides the key in Netlify's settings
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: event.body
  });
  const data = await response.json();
  return { statusCode: 200, body: JSON.stringify(data) };
};