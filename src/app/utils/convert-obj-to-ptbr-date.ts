export const convertObjToPtBrDate = (data: Date): string => {
    const day = padZero(data.getDate());
    const month = padZero(data.getMonth() + 1);
    const year = padZero(data.getFullYear());

    return `${day}/${month}/${year}`;
}

const padZero = (value: number): string => {
    if(value < 10) return `0${value}`;
    return value.toString();
}