import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
type inputProps = {
  imageUrls?: any[] | undefined
  variant?: string | undefined
  register: UseFormRegister<any>
  name: string
}

const FileInput = ({ imageUrls, variant, register, name }: inputProps) => {
  const [previews, setPreviews] = useState<string[] | ArrayBuffer[] | null>([])

  const previewF = (file: FileList) => {
    let previewUrls = []
    previewUrls = [...file].map((file) => {
      return URL.createObjectURL(file)
    })
    return previewUrls
  }

  const handleChange = (e: React.SyntheticEvent) => {
    setPreviews(previewF(e.target.files))
  }
  return (
    <div>
      <label className='block'>
        <span className='sr-only'>Choose profile photo</span>
        <input
          type='file'
          accept='image/*'
          // {...(register('imageUrl'),
          // {
          //   onChange: (e) => {
          //     handleChange(e)
          //   }
          // })}
          {...register(name)}
          multiple
          onChange={(e) => handleChange(e)}
          className='block w-full text-sm text-gray-500
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
            file:disabled:opacity-50 file:disabled:pointer-events-none
            dark:file:bg-blue-500
            dark:hover:file:bg-blue-400
            cursor-pointer
    '
        />
      </label>

      {variant === 'ADD' ? (
        previews && (
          <p className='my-5 w-full grid grid-cols-1 gap-4 md:grid-cols-2'>
            {previews?.map((preview, index) => <img key={index} src={preview as string} alt='Upload preview' />)}
          </p>
        )
      ) : (
        <p className='my-5 w-full '>
          {imageUrls?.map((image) => <img key={image.id} src={image.thumbnailUrl} alt='Upload preview' />)}
        </p>
      )}
    </div>
  )
}

export default FileInput
