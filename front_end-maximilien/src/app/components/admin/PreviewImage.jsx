import React, { useState } from 'react';

const PreviewImage = ({ file }) => {

    const [preview, setPreview] = useState(null)

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    }

    return (
        <div className='flex justify-center'>
            <img src={preview} alt="preview" className='w-60 mb-8' />
        </div>
    );
};

export default PreviewImage;