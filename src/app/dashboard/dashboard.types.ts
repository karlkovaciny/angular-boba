export interface Video   {
    title: string;
    author: string;
    id: string;
    viewDetails: ViewDetails[]
}

interface ViewDetails {
        age: number;
        region: string;
        date: string;
      }