export const isAdminEnabled = () => {
    const adminPassword = localStorage.getItem('bankerAdmin');
    if(adminPassword && adminPassword !== '""') return true;
    return false;
};


