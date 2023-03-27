import * as yts from "yt-search";
export default async function handler(req, res) {
  const { query } = req.query;
  const results = await yts(query);
  res.json(results.videos);
}
