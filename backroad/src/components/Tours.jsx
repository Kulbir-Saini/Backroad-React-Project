import { FaMap } from 'react-icons/fa';
import {tourData} from '../data';
function Tours() {
    return(
        <>
            <section className="section" id="tours">
                <div className="section-title">
                    <h2>featured<span> Tours</span></h2>
                </div>
                <div className="section-center featured-center">
                   {tourData.map((data)=>{
                    const {id, imageSource, date, tourHeading, tourText, tourCountry, tourDays, tourPrice} = data;
                    return(
                        <article key={id} className='tour-card'>
                            <div className='tour-image-container'>
                                <img src={imageSource} className='tour-img' alt=""/>
                                <p className='tour-date'>{date}</p>
                            </div>
                            <div className='tour-info'>
                                    <h4>{tourHeading}</h4>
                                <p>
                                    {tourText}
                                </p>
                                <div className='tour-footer'>
                                    <p>
                                        <span><i><FaMap /></i></span>{tourCountry}
                                    </p>
                                    <p>{tourDays}</p>
                                    <p>{tourPrice}</p>
                                </div>
                            </div>
                        </article>
                    )
                   })}

                </div>
            </section>
        </>
    )
}

export default Tours;