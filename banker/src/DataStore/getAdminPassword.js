export const getAdminPassword = () => {
    return JSON.parse(localStorage.getItem('bankerAdmin'));
};
