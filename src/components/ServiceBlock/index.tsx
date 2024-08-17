import React, { useState, useEffect } from 'react';
import { ServiceBlockProps } from './types';
import { ServiceRow, ServiceWrapper, Title, Description, ExpandedContent, ExpandedSection } from './styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires CSS loader

const ServiceBlock: React.FC<ServiceBlockProps> = ({ services, title, id }) => {
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
        <div id={id}>
            {title && <Title>{title}</Title>}
            <ServiceRow gutter={[16, 16]}>
                {services.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceWrapper onClick={() => handleToggle(index)}>
                            <Title>{service.title}</Title>
                            <Description>{service.description}</Description>
                            <Description style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 14, marginBottom: 0 }}>Läs mer</Description> {/* Styling "Läs mer" */}
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
    if (service.title === "HR Interim") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                Som HR-expert har jag stor erfarenhet av både mindre och större företag från flera 
olika branscher ex Försäkring, Finans, Bygg och Teknikkonsult. Min styrka ligger i att
jag snabbt ser vad som behöver göras strategiskt och även omsätta det operativt.
Min drivkraft är att se människor och företag utvecklas, med mig får du ett stort
engagmang för uppgiften och en positiv inställning till allt jag tar mig för.
                </p>
                {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
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
                </Carousel> */}
            </>
        );
    } else if (service.title === "Utveckling & Lärande") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                Våra utvecklingsinsatser skräddarsyr vi tillsammans med våra kunder och är
utformade utifrån att förbättra samarbetet, öka engagemanget och främja en
lärandekultur. Vår kunskap och erfarenhet av lärande visar på att man behöver träna
förmågor inom bland annat relationsbyggande, självledarskap och driva förändring
för att skapa långsiktiga och hållbara resultat. Vi erbjuder utveckling på både grupp
och individnivå.
                </p>
                {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
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
                </Carousel> */}
            </>
        );
    } else if (service.title === "HR-transformation") {
        return (
            <>
                <h3>Varför {service.title}?</h3>
                <p>
                Vi inleder med en nulägesanalys/audit av HRs uppdrag där områden som HR-
processer och arbetssätt, digitalisering och medarbetarupplevelsen är i fokus.
Därefter gör vi tillsammans med kunden en strategisk utvecklingsplan med förslag på
aktiviteter där det t ex kan ingå förstudie och upphandling av HR-system som är
anpassade till företagets behov. Vi är gärna er transformationspartner.
                </p>
                {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
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
                </Carousel> */}
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
