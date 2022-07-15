export function formDataToJSON(formElement) {
    let formData = new FormData(formElement);

    const converted = Object.fromEntries(formData.entries());

    return converted;
}
export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}