export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    title: string;
    user: string;
    date: string;
    thumbnail: string;
}
