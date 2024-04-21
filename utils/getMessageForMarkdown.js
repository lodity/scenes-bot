export const getMessageForMarkdown = (message) => {
    return message.replace(/\./g, '\\.');
};
