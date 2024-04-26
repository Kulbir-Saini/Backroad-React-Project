import { servicesData } from "../data";
function Services() {
    return(
        <>
            <section className="section services" id="services">
                <div className="section-title">
                    <h2>our<span> services</span></h2>
                </div>
                <div className="section-center services-center">
                   {servicesData.map((data)=>{
                        const {id, serviceHeading, serviceText, icon} = data;
                        return (
                            <article key={id} className="service">
                                <span className="service-icon"><i>{icon}</i></span>
                                <div className="service-info">
                                    <h4 className="service-title">{serviceHeading}</h4>
                                    <p className="service-text">{serviceText}</p>
                                </div>
                            </article>
                        )
                   })}
                </div>
            </section>
        </>
    )
}

export default Services;