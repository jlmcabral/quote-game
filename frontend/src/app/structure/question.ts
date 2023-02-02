export interface Question  {
    quote: string;
    options: {
        name: string,
        state: boolean,
    }[]
}