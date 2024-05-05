import React, { useEffect } from 'react';
import DefaultLayout from '../DefaultLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastrMessageType, ToastrPosition } from '../../../../services/toastify/ToastifyConfiguration';
import ModalService from '../../../../services/modal/ModalService';
import { useCountries } from "use-react-countries";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  Select,
  Option,
  List,
  ListItem,
  ListItemSuffix,
  IconButton,
  Checkbox,
  Radio,
  Avatar
} from "@material-tailwind/react";
import CustomMenu from '../../components/CustomMenu/menu';
import { getAllCities } from '../../../../services/api';


const Address: React.FC = () => {

  const notify = (title: string, message: string) => {
    toast(<div><h1>{title}</h1><h4>{message}</h4></div>,
      {
        type: ToastrMessageType.Default,
        position: ToastrPosition.BottomRight
      }
    );
  }

const [cities,setCities] = React.useState([]);

getAllCities("City").then(x=> {
  setCities(x.data);
});

  useEffect((title = "Başlık 1", message = "Deneme") => {   

    //notify(title, message);
  });

  const { countries } = useCountries();
  

  //const [display, setDisplay] = React.useState(true);
  const [newCountries, setNewCountries] = React.useState([]);


  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setNewCountries(countries.filter(e => e.name.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())));
      //setDisplay(false);
    }
    else if (event.target.value.length == 0) {
      // setDisplay(true);
      setNewCountries(countries);
    }
  }

  const asd = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log("radio calsti");
  }

  const deleteIcon = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("sil calsti");
  }

  const updateIcon = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("güncelle calsti");
  }

  return (
    <DefaultLayout>
      <div className="relative flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-full max-h-screen ">
        <div className="grid grid-rows-12 grid-flow-col gap-2 min-h-screen p-10 content-start ">
          <CustomMenu
            inputTitle='Şehir'
            inputButtonId='SehirEkle'
            inputButtonOnClick={(event: React.MouseEvent<HTMLButtonElement>) => notify('Deneme','Asd')}
            // inputOnChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            url='City'
            MenuConfiguration={{
              menuTitle: 'Şehirler',
              listData: cities,
              radioId: 'Sehir',
              radioValue: '12',
              menuHandlerButtonId: 'SehirListele',
              radioBackgroundColor: 'red',
              radioOnClick: (event: React.MouseEvent<HTMLInputElement>) => { console.log("radio calsti"); },
              deleteIconOnClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
                toast(<div><h1>{'Başarılı'}</h1><h4>{'Silme işlemi başarıyla yapılmıştır.'}</h4></div>,
                  {
                    type: ToastrMessageType.Default,
                    position: ToastrPosition.BottomRight
                  }
                );
              },
              updateIconOnClick: (event: React.MouseEvent<HTMLAnchorElement>) => { console.log("güncelle calsti"); }
            }} />

          <CustomMenu
            inputTitle='Şehir'
            inputButtonId='SehirEkle'
            inputButtonOnClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log("ekle")}
            inputOnChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewCountries(countries.filter(e => e.name.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())));
            }
            }
            MenuConfiguration={{
              menuTitle: 'Şehirler',
              listData: countries,
              radioId: 'Sehir',
              radioValue: '12',
              menuHandlerButtonId: 'SehirListele',
              radioBackgroundColor: 'red',
              radioOnClick: (event: React.MouseEvent<HTMLInputElement>) => { console.log("radio calsti"); },
              deleteIconOnClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
                toast(<div><h1>{'Başarılı'}</h1><h4>{'Silme işlemi başarıyla yapılmıştır.'}</h4></div>,
                  {
                    type: ToastrMessageType.Default,
                    position: ToastrPosition.BottomRight
                  }
                );
              },
              updateIconOnClick: (event: React.MouseEvent<HTMLAnchorElement>) => { console.log("güncelle calsti"); }
            }} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Address;