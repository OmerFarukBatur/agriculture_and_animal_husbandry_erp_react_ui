import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalService from '../../../../services/modal/ModalService';
import { InputConfiguration } from './menuConfiguration';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  Radio
} from "@material-tailwind/react";
import axios from 'axios';
import { getAllCities, postCity } from '../../../../services/api';


const CustomMenu: React.FC<InputConfiguration> = (props) => {
  const [cityName,setCityName]=React.useState(String);

  useEffect(() => {
    //console.log(getAll(props.url));
    
  });

  const [newData, setNewData] = React.useState(props.MenuConfiguration.listData);
  const [cities,setCities] = React.useState([]);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      getAllCities("City").then(x=> { setCities(x.data); });
      setNewData(props.MenuConfiguration.listData.filter(e => e.name.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())));
      setCityName(event.target.value.toString());
      //setDisplay(false);
    }
    else if (event.target.value.length == 0) {
      // setDisplay(true);
      setNewData(props.MenuConfiguration.listData);
    }
  }

  const inputButtonOnClick= (event: React.MouseEvent<HTMLButtonElement>)=>{
    postCity(props.url,{cityName:cityName});
  }


  return (
    <>
     
          <label>{props.inputTitle}</label>
          <div className="relative flex w-full max-w-[24rem]">

            <Input
              type="text"
              onChange={filter}
              className="pr-20"
              containerProps={{
                className: "min-w-0 bg-purple-200",
              }}
            />
            <Button
              id={props.inputButtonId}
              type='submit'
              size="sm"
              color={"blue-gray"}
              className="!absolute right-1 top-1 rounded bg-slate-400"
              onClick={inputButtonOnClick}
            >
              Ekle
            </Button>
          </div>
          <div className="relative flex w-full max-w-[24rem]  bg-sky-300">
            <Menu dismiss={{
              itemPress: false,
            }}>
              <MenuHandler >
                <Button id={props.MenuConfiguration.menuHandlerButtonId} type="button" className="w-full">{props.MenuConfiguration.menuTitle}</Button>
              </MenuHandler>
              <MenuList className="max-h-72">
                {newData.map(({ id,name }, index) => (
                  <MenuItem key={cityName}>
                    <label
                      htmlFor="item-3"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >


                      <Radio
                        type='radio'
                        color="purple"
                        id={props.MenuConfiguration.radioId}
                        className=" h-5 w-5"
                        value={props.MenuConfiguration.radioValue}
                        style={{ backgroundColor: props.MenuConfiguration.radioBackgroundColor }}
                        onClick={props.MenuConfiguration.radioOnClick}
                        ripple={true}
                      />

                      <img
                        //src={flags.svg}
                        id={id}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}

                      <a className='h-5 w-5' color='blue-gray' onClick={props.MenuConfiguration.deleteIconOnClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      <a className='h-5 w-5' color='blue-gray' onClick={props.MenuConfiguration.updateIconOnClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                            clipRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </a>
                    </label>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>        
        <ToastContainer />
        <ModalService yes={() => alert("Yes çalıştı")} no={() => alert("No çalıştı")}></ModalService>       
    </>
  );
};

export default CustomMenu;