import type { IconProps } from "@phosphor-icons/react";
import { StyledButton, type ButtonTypeProps } from "./style";
type IconType = React.ComponentType<IconProps>;
type ActionItem = {
  icon?: IconType;
};
type Props = {
  name?: string;
  type?: ButtonTypeProps;
  urlImage?: string;
  onClick?: () => void;
  icon?: ActionItem[];
};
export function Button({ name, urlImage, type, onClick,icon }: Props) {
  return (
    <>
      <StyledButton onClick={onClick} type={type}>
        {icon?.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}>
              {Icon && <Icon weight="fill" size={22} />}
            </div>
          );
        })}
        {name}
        {urlImage && <img src={urlImage} alt="" />}
      </StyledButton>
    </>
  );
}
