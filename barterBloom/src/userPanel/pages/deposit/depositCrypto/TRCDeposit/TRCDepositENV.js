import io from 'socket.io-client';
import { setCreatedTime, setDepositQRData, setExpireTime } from '../../../../../globalState/paymentState/paymentStateSlice';

export async function initiateSocketConnection({ token, network, amount, dispatch }) {
    console.log({ token, network, amount });

    return new Promise((resolve, reject) => {
        const socket = io('https://backend.boostbullion.com', {
            autoConnect: false,
            extraHeaders: {
                authorization: token
            }
        });

        socket.connect();

        socket.on('connect', () => {
            console.log('✅ Connected');
            socket.emit('startPayment', { network, amount });
        });

        socket.on('paymentReady', (data) => {
            dispatch(setDepositQRData(data?.data?.payment_info[0]))
            dispatch(setCreatedTime(data?.data?.created_time))
            dispatch(setExpireTime(data?.data?.expire_time))
            console.log('📩 paymentReady:', data);
        });

        socket.on('paymentStatus', (data) => {
            console.log('📩 paymentStatus:', data);
            resolve(data);
            socket.disconnect();
        });

        socket.on('connect_error', (err) => {
            console.error('Connection error:', err);
            reject(err);
            socket.disconnect();
        });

        socket.on('error', (err) => {
            reject(err);
            socket.disconnect();
        });
    });
}