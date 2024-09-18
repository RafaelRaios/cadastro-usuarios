export const convertToPtBrDate = (date: string): Date | null => {
    if(!date) return null;

    const [day, month, year] = date.split('/').map(Number);

    const valid = isValidDate(day, month, year);

    if (valid) {
        
        return new Date(year, month - 1, day);
    }

    return null;
}

const isValidDate = (day: number, month: number, year: number): Boolean => {
    const date = new Date(year, month - 1, day)

    return (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
    );
}