export class DetailedData{
    public data? : Data[];
    public status? : string;
}

export class Data {
    public author?: string;
    public birthday?: string;
    public birthPlace?: string;
    public books? : Books[];
}

export class Books{
    imageUrl? : string;
    title? : string;
    purchaseLink? : string;
    publishDate? : Date;
}