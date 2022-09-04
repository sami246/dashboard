import React, { useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// Use Navbutton with arguments to reduce duplicate code
const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} postion="BottomCenter">
    <button type="button" onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
  </TooltipComponent>

)


const Navbar = () => {
const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, setScreenSize, screenSize } = useStateContext();

// Second argument is a depencedncy array that means the useEffect is only put into affect once the variale is changed
// e.g. empty would mean it runs only at the opening of page, screenSize would mean when screen size changes however constantly checking screen size would be heavy for the application so no do
useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth)
  // If it resizes then recall handleResize
  window.addEventListener('resize', handleResize);
  //needs to be called initally
  handleResize();
  // When using an event listener you need to close it
  return () => window.removeEventListener('resize', handleResize)
}, [])

useEffect(() => {
  if(screenSize <= 900){
    setActiveMenu(false);
  } else{
    setActiveMenu(true);
  }
}, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />}/>
    
      <div className='flex'>
          <NavButton title='Cart' customFunc={() => handleClick('cart')} color="blue" icon={<FiShoppingCart />}/>
      </div>
      <div className='flex'>
          <NavButton title='Chat' customFunc={() => handleClick('chat')} color="blue" dotColor='#03C9D7' icon={<BsChatLeft />}/>
      </div>
      <div className='flex'>
          <NavButton title='Notifications' customFunc={() => handleClick('notification')} color="blue" icon={<RiNotification3Line />}/>
      </div>
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
          <img className='rounded-full w-8 h-8' src={avatar} />
          <p>
            <span className='text-gray-400 text-14'>Hi, </span> {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>

      {/* Use context to decide component to render, based on what is sent to handleClick */}
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  )
}

export default Navbar