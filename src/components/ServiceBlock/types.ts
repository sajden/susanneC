// src/components/ServiceBlock/types.ts

export interface ServiceBlockProps {
    services: ServiceItem[];
    title?: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}
