export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const sleep: any = async (m: any) => await new Promise(r => setTimeout(r, m))

export const maskCardNumber = (cardNumber: string) => {
    let cardNumberArr = cardNumber.split('');
    cardNumberArr.forEach((val, index) => {
        if (index >= 0 && index < 14) {
            if (cardNumberArr[index] !== ' ') {
                cardNumberArr[index] = '*';
            }
        }
    });

    return cardNumberArr;
};