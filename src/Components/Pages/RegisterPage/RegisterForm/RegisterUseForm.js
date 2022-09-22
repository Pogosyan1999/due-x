import { useEffect, useState } from "react";
import axios from "axios";
import img from "./img/user.png";

const RegisterUseForm = (registerValidate) => {
  const [photo, setPhoto] = useState(img);
  const [data, setData] = useState([]);
  const [submit,setSubmit] = useState(false);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  const UploadPhoto = (e) =>{
    if(e.target.files[0] === 1){
       setPhoto(URL.createObjectURL(e.target.files[1]));
    }else{
     setPhoto(URL.createObjectURL(e.target.files[0]));

    }
 }

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

  const handleCountry = (e) => {
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    setState(states);
    states.sort();
  };

  const handleCity = (e) => {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    setCities(cities);
    console.log(cities);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(registerValidate(values));
    setSubmit(true);
  };

  return {
    handleChange,
    values,
   
    UploadPhoto,
    photo,
    getState,
    handleSubmit,
    errors,
    data,
    country,
    getCountry,
    handleCountry,
    handleCity,
    cities,
    handleCity,
  };
};

export default RegisterUseForm;
