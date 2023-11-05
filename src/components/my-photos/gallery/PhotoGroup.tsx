import Image from 'next/image';

export const PhotoGroup = ({ filePaths }: { filePaths?: string[] }) => {
  return (
    <div className='grid grid-cols-8 md:grid-cols-5 gap-2 mx-3'>
      {filePaths?.map(filePath => (
        <div key={filePath} className='border-gray-500 border-2 border-opacity-50' style={{ height: '300px' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image src={filePath} alt={filePath} fill />
          </div>
        </div>
      ))}
    </div>
  );
};
