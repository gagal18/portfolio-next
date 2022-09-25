import React, {useState} from 'react';
import Avatar from "avataaars";

function AvatarHover(props) {
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div className={"w-80"} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            <Avatar
                avatarStyle='Transparent'
                topType='ShortHairShortFlat'
                accessoriesType='Blank'
                hairColor='Blonde'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Black'
                eyeType={mouseOver ? 'Wink' : 'Default'}
                eyebrowType='UpDown'
                mouthType={mouseOver ? 'Smile' : 'Twinkle'}
                skinColor='Light'
            />
        </div>
    );
}

export default AvatarHover;
