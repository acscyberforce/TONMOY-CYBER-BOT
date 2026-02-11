module.exports = {
  config: {
    name: "fork",
    version: "1.0.0",
    author: "Hinata",
    role: 0, // 0 = all, 1 = group admin, 2 = bot admin
    shortDescription: "Send GitHub repo link",
    longDescription: "Sends your GitHub repository link",
    category: "other",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function({ api, event }) {
    if (event.senderID !== "61582803188949") {
      return api.sendMessage("❌ You don’t have permission to use this command.", event.threadID, event.messageID);
    }

    return api.sendMessage(
      "🔗𝒇𝒖𝒄𝒌 𝒚𝒐𝒖𝒓 𝒎𝒐𝒎 𝒊𝒎 𝒕𝒐𝒏𝒎𝒐𝒚 𝒃𝒐𝒕 𝒖𝒌𝒚",
      event.threadID,
      event.messageID
    );
  }
};
