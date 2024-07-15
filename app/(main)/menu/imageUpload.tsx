'use client'

import React, { useState, useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

interface ImageUploadProps {
  onFileDrop: (file: File) => void;
}
const ImageUpload: React.FC<ImageUploadProps>= ({onFileDrop}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setImageSrc(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      onFileDrop(file);
    }
  }, [onFileDrop]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ['image/jpeg', 'image/png'] as unknown as DropzoneOptions['accept']});

  return (
    <div className="flex w-1/2 border-slate-200 text-base font-normal border rounded-lg">
    <div {...getRootProps()} className="flex justify-center items-center w-[400px] h-[400px] cursor-pointer hover:bg-slate-50">
      <input {...getInputProps()} name='foto'/>
      {imageSrc ? (
        <img
          alt="Uploaded"
          className="w-full h-full object-contain"
          src={imageSrc}
        />
      ) : (
        <p>Drag n drop a file here, or click to select one</p>
      )}
    </div>
  </div>
  );
};

export default ImageUpload;
