import React, {useEffect, useState} from 'react';

function CircleCarousel({children, ...rest}) {
    let [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count++)
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    let degree = 360/children.length
    return (
        <div className={`relative mt-28 lg:mt-40 -left-20 lg:left-unset lg:float-right`}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child,{
                    deg: degree * i + count*degree
                });
            })}
        </div>
    );
}

export default CircleCarousel;
