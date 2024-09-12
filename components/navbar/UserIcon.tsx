import { fetchProfileImage } from '@/utils/actions'
import Image from 'next/image'
import {LuUser2} from 'react-icons/lu'

async function UserIcon() {
  const profileImage = await fetchProfileImage()
  if (profileImage) {
    return (
      <Image src={profileImage} width={24} height={24} alt='user icon' className='w-6 h-6 rounded-full object-cover' />
    )
  }

  return (
    <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white'/>
  )
}

export default UserIcon