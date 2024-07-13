import React, { useState, useEffect } from 'react';
import { ServiceBlockProps } from './types';
import { ServiceRow, ServiceWrapper, Title, Description, ExpandedContent, ExpandedSection } from './styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires CSS loader

const ServiceBlock: React.FC<ServiceBlockProps> = ({ services, title }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call handler once on mount to set initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            {title && <Title>{title}</Title>}
            <ServiceRow gutter={[16, 16]}>
                {services.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceWrapper onClick={() => handleToggle(index)}>
                            <Title>{service.title}</Title>
                            <Description>{service.description}</Description>
                        </ServiceWrapper>
                        {isMobile && expandedIndex === index && (
                            <ExpandedSection>
                                <ExpandedContent>
                                    <ExpandedServiceContent service={service} />
                                </ExpandedContent>
                            </ExpandedSection>
                        )}
                    </React.Fragment>
                ))}
            </ServiceRow>
            {!isMobile && expandedIndex !== null && (
                <ExpandedSection className="expanded-under-all">
                    <ExpandedContent>
                        <ExpandedServiceContent service={services[expandedIndex]} />
                    </ExpandedContent>
                </ExpandedSection>
            )}
        </div>
    );
};

const ExpandedServiceContent: React.FC<{ service: any }> = ({ service }) => {
    if (service.title === "Personalutveckling") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                    Personalutveckling är viktigt eftersom det hjälper individer att maximera sin potential och effektivitet. Genom skräddarsydda utvecklingsprogram kan vi bygga starka team som arbetar bra tillsammans. Gestaltmetoden spelar en viktig roll i personalutveckling genom att främja självmedvetenhet och autentiska relationer inom teamet. Detta leder till bättre kommunikation, ökat förtroende och en mer produktiv arbetsmiljö.
                </p>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src="/img/svg/pu1.jpg" alt="Personalutveckling image 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 1 description</p>
                    </div>
                    <div>
                        <img src="/img/svg/pu2.jpg" alt="Personalutveckling image 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 2 description</p>
                    </div>
                    <div>
                        <img src="/img/svg/pu3.jpg" alt="Personalutveckling image 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 3 description</p>
                    </div>
                </Carousel>
            </>
        );
    } else if (service.title === "HR-processer") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                    HR-processer är avgörande för att säkerställa att en organisation fungerar smidigt och effektivt. Vårt team av experter hjälper till att optimera HR-processer genom att implementera strategier för digitalisering och arbetskraftsplanering. Genom att fokusera på förändringsledning och ledarskapsutveckling, stödjer vi ditt HR-team för att uppnå sina mål.
                </p>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src="path-to-image1.jpg" alt="HR-processer image 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 1 description</p>
                    </div>
                    <div>
                        <img src="path-to-image2.jpg" alt="HR-processer image 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 2 description</p>
                    </div>
                    <div>
                        <img src="path-to-image3.jpg" alt="HR-processer image 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 3 description</p>
                    </div>
                </Carousel>
            </>
        );
    } else if (service.title === "Organisationsförändring") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                    Organisationsförändring är en komplex process som kräver noggrann planering och genomförande. Vi specialiserar oss på att hjälpa företag navigera genom förändringar, inklusive fusioner och förvärv, samt organisationsutveckling. Genom vår expertvägledning kan vi säkerställa att ditt företag anpassar sig effektivt till förändringar och bibehåller sin konkurrenskraft.
                </p>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src="path-to-image1.jpg" alt="Organisationsförändring image 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 1 description</p>
                    </div>
                    <div>
                        <img src="path-to-image2.jpg" alt="Organisationsförändring image 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 2 description</p>
                    </div>
                    <div>
                        <img src="path-to-image3.jpg" alt="Organisationsförändring image 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className="legend">Image 3 description</p>
                    </div>
                </Carousel>
            </>
        );
    }

    return (
        <>
            <h3>More about {service.title}</h3>
            <p>{service.description}</p>
            <img src="path-to-image" alt={`${service.title} image`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </>
    );
};

export default ServiceBlock;
