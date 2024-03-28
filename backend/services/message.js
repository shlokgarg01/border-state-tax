const NodeCache = require("node-cache");

const myCache = new NodeCache();
const CACHE_KEY = "messages";

const post_sms = (req, res) => {
  const { messages } = req.body;

  const previous_messages = myCache.get(CACHE_KEY) || [];
  if (!messages.every((ele) => previous_messages.includes(ele))) {
    // if no new message is there, then skip this
    try {
      myCache.set(CACHE_KEY, messages, 3600); // ttl is 60 minutes
    } catch (error) {
      console.log("Error while setting cache - ", error);
    }
  }

  res.status(200).json({
    is_success: true,
    message: "Messages saved!",
  });
};

const get_sms = (req, res) => {
  let messages = myCache.get(CACHE_KEY);
  messages ||= [];

  res.status(200).json({
    is_success: true,
    messages,
  });
};

module.exports = { get_sms, post_sms };
