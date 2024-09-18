import * as zxcvbn from 'zxcvbn';

export const getPasswordStrenghtValue = (password: string): number => {
    const result = zxcvbn(password);
    const W_Password = result.score <= 1;
    const M_Password = result.score <= 3;

    if(!password) return 0;
    else if(W_Password) return 30;
    else if(M_Password) return 60;
    else return 100;
    
}