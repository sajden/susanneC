// src/components/ServiceBlock/index.tsx

import React from 'react';
import { ServiceBlockProps } from './types';
import { ServiceRow, ServiceWrapper, Title, Description } from './styles';

const ServiceBlock: React.FC<ServiceBlockProps> = ({ services, title }) => {
    return (
        <div>
            {title && <Title>{title}</Title>}
            <ServiceRow gutter={[16, 16]}>
                {services.map((service, index) => (
                    <ServiceWrapper key={index}>
                        <Title>{service.title}</Title>
                        <Description>{service.description}</Description>
                    </ServiceWrapper>
                ))}
            </ServiceRow>
        </div>
    );
};

export default ServiceBlock;
