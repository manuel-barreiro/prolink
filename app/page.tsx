import LinkCard from '@/components/LinkCard'
import Image from 'next/image'

export default function Home (): JSX.Element {
  const name = 'twitter'
  const href = 'https://x.com/'
  const icon = 'icon'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src={'/profile.JPG'}
        width={120}
        height={120}
        className='rounded-full'
        alt='profile'></Image>

      <LinkCard name={name} href={href} icon={icon} />
    </main>
  )
}
