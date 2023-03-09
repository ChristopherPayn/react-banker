import { getAdminPassword } from "./getAdminPassword";

export const verifyAdmin = submittedPassword => {
    const adminPassword = getAdminPassword();
    if (adminPassword === submittedPassword) return true;
    return false; 
};
