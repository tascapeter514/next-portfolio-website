import { FaCode,  FaDatabase } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";





export type IconProps = React.ComponentPropsWithoutRef<'svg'>

export const BracketsIcon = (props: IconProps) => <FaCode {...props} />

export const DatabaseIcon = (props: IconProps) => <FaDatabase {...props}/>

export const MicrochipIcon = (props: IconProps) => <FaMicrochip {...props} />

export const HamburgerIcon = (props: IconProps) => <GiHamburgerMenu role='button' tabIndex={0} className='h-full w-full' aria-label='open mobile nav icon' {...props}/>

export const CloseHamburgerIcon = (props: IconProps) => <AiOutlineClose role='button' tabIndex={0} aria-checked='false' className='h-full w-full' {...props}/>