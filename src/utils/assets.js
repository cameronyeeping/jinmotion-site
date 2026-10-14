// Public assets use root-relative paths so nested routes resolve them correctly.
export const getAssetUrl = (url) => {
    if (!url) return '';
    return /^(https?:\/\/|\/)/.test(url) ? url : `/${url}`;
};
