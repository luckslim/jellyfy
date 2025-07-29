import { type IconProps } from "@phosphor-icons/react";
import { ContainerGeneralActions } from "./style";
type IconType = React.ComponentType<IconProps>
type ActionItem = {
  icon?: IconType;
  text?: string;
  onClick?: ()=> void;
}
type Props = {
  icons?: ActionItem[]
}
export function Actions({icons}:Props) {
  return (
    <>

      <ContainerGeneralActions>
        {icons?.map((item,index)=>{
          const Icon = item.icon
          return (
            <div key={index}>
              {Icon &&  <Icon onClick={item.onClick} size={22}/>}
            </div>
          )
        })}
      </ContainerGeneralActions>
    </>
  );
}
