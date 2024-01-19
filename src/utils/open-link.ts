export const openURL = (url:string) => {
    if (!url) {
        throw new Error('URL is required')
    }

    window.open(url);
}