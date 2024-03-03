import axios from 'axios';

export type Email = {
    email: string;
    subject: string;
    message: string;
}

export type ResponseMessage = {
    isSuccessful: boolean;
    isError?: boolean;
    message: string;
};

export const sendEmail = async (email: Email) => {
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: email,
    });
};