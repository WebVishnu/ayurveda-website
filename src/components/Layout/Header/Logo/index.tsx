import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="Arogya Jeevan Ayurveda"
        width={100}
        height={20}
        // style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/logo.png"
        alt="Arogya Jeevan Ayurveda"
        width={100}
        height={20}
        // style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
