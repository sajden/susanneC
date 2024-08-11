export interface ServiceBlockProps {
    services: ServiceItem[];
    title?: string;
    id: string;  // Add the id property here
  }
  
  export interface ServiceItem {
    title: string;
    description: string;
  }
  