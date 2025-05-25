import { FaCode,  FaDatabase } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";





export type IconProps = React.ComponentPropsWithoutRef<'svg'>

export const BracketsIcon = (props: IconProps) => <FaCode {...props} />

export const DatabaseIcon = (props: IconProps) => <FaDatabase {...props}/>

export const MicrochipIcon = (props: IconProps) => <FaMicrochip {...props} />

export const HamburgerIcon = (props: IconProps) => <GiHamburgerMenu className='h-full w-full' {...props}/>

export const CloseHamburgerIcon = (props: IconProps) => <AiOutlineClose className='h-full w-full' {...props}/>