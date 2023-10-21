import { BsExclamationTriangle } from 'react-icons/bs';

export default function NotFound () {
  return (
    <div className='text-[#6C63FF] h-screen text-center gap-3 flex items-center justify-center'>
      <h1 className='font-semibold text-4xl'>404 Page Not Found</h1>
      <BsExclamationTriangle size={50} color='' />
    </div>
  );
};
 