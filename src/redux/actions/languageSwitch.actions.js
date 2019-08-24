export const switchLanguageActions = {
    setLanguage
};

function setLanguage(message) {
    return { type: "SET_LANGUAGE", language: message };
}
