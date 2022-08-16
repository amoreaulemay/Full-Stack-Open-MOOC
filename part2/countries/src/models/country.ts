export interface CapitalInfo {
    latlng: [number, number];
}

export interface Country {
    name: {
        common: string,
        official: string,
    },
    capital: string[],
    languages: {
        [Key: string]: string,
    },
    flags: {
        svg: string,
    },
    area: number,
    capitalInfo: CapitalInfo | {}
}