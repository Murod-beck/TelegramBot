const cons = {
  chatId(msg) {
    return msg.chat.id;
  },
  text(msg) {
    return msg.text;
  },
  names(msg) {
    return msg.from.first_name;
  },
  mess(msg) {
    return msg.message.chat.id;
  },
};

module.exports = cons;
