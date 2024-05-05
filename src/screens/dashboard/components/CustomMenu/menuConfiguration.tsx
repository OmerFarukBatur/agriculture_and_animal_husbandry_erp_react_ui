import { GetAllAddressGeneralData } from "../../dtos/AddressDto";

export interface InputConfiguration{
    inputTitle:string;
    inputButtonId:string;
    inputOnChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    inputButtonOnClick:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    url?:string;
    MenuConfiguration:MenuConfiguration;
  }


  export interface MenuConfiguration{
    menuTitle:string;
    menuHandlerButtonId:string;
    listData:GetAllAddressGeneralData[];
    radioId:string;
    radioValue:string|number;
    radioBackgroundColor:string;
    radioOnClick:(event: React.MouseEvent<HTMLInputElement>)=>void;
    deleteIconOnClick:(event: React.MouseEvent<HTMLAnchorElement>) => void;
    updateIconOnClick:(event: React.MouseEvent<HTMLAnchorElement>) => void;
  }