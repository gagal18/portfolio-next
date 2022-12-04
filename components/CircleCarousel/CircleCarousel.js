import React, {useEffect, useState} from 'react';

function CircleCarousel({children, ...rest}) {
    let [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count++)
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    let degree = 360/children.length
    return (
        <div className={`mt-60 lg:mt-40 -left-12 lg:-left-60 lg:left-unset absolute lg:relative`}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child,{
                    deg: degree * i + count*degree
                });
            })}
        </div>
    );
}

export default CircleCarousel;
