const getMessageForMarkdown = (message) => {
    return message.replaceAll(/\./g, '\\.').replaceAll(/\+/g, '\\+').replaceAll(/\(/g, '\\(').replaceAll(/\)/g, '\\)');
};

export default getMessageForMarkdown