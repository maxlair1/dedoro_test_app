export function formatTime(input: number): string {
    const minutes = Math.floor(input / 60);
    const seconds = input % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}