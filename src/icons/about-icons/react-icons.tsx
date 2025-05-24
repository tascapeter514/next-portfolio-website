import { FaCode,  FaDatabase } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";





export type IconProps = React.ComponentPropsWithoutRef<'svg'>


export const BracketsIcon = (props: IconProps) => <FaCode {...props} />

export const DatabaseIcon = (props: IconProps) => <FaDatabase {...props}/>

export const MicrochipIcon = (props: IconProps) => <FaMicrochip {...props} />