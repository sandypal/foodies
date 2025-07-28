'use client';

import { useRef,useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({label,name}) {
    
    const [pickedImage, setPickedImage] = useState();

    const imageInput = useRef();
    function handleImagePick(event) {
        imageInput.current.click();
    }

    function handleChangeEvent(event){
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            setPickedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill/>}
            {!pickedImage && <p>No image picked yet!</p>}
        </div>
        <input
            className={classes.input}
            type="file" 
            id={name} 
            name={name} 
            accept="image/*"
            ref={imageInput}
            required
            onChange={handleChangeEvent}
        />
        <button type="button" onClick={handleImagePick} className={classes.button}>
          Pick Image
        </button>
        </div>
    </div>
  );
}