import { FaCode, FaMicrochip, FaDatabase } from "react-icons/fa";




export type IconProps = React.ComponentPropsWithoutRef<'svg'>


export const BracketsIcon = (props: IconProps) => <FaCode {...props} />

export const DatabaseIcon = (props: IconProps) => <FaDatabase {...props}/>

export const MicrochipIcon = (props: IconProps) => <FaMicrochip {...props} />