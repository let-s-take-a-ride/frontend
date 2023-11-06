import { useState } from "react";
import { getAxiosInstance } from "../services/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDataFromLocalStorage } from "../services/localStorageService";
import { useSelector, useDispatch } from "react-redux";

const useCreateRide = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updatedData = new FormData();
  const { id } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    owner: id,
    date: "",
    average_speed: null,
    members_count: 0,
    max_members: null,
    city: "",
    photo: null,
    gpx_track: null,
  });

  const [selectedGpxFile, setSelectedGpxFile] = useState("");
  const [selectedJpgFile, setSelectedJpgFile] = useState("");
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleJpgFileChange = (e) => {
    const file = e.target.files[0];
    if (isValidImageFile(file)) {
      setFormData({
        ...formData,
        [e.target.name]: file,
      });
      setSelectedJpgFile(file ? file.name : "");
      setErrors({ ...errors, photo: "" });
    } else {
      setErrors({ ...errors, photo: "Invalid image file format." });
    }
  };

  const handleGpxFileChange = (e) => {
    const file = e.target.files[0];
    if (isValidGpxFile(file)) {
      setFormData({
        ...formData,
        [e.target.name]: file,
      });
      setSelectedGpxFile(file ? file.name : "");
      setErrors({ ...errors, gpx_track: "" });
    } else {
      setErrors({ ...errors, gpx_track: "Invalid GPX file format." });
    }
  };

  const handleSubmit = async () => {
    if (validate()) {
      console.log("All fields are valid");
      console.log(formData.date);
      updatedData.append("name", formData.name);
      updatedData.append("description", formData.description);
      updatedData.append("owner", formData.owner);
      updatedData.append("date", formData.date);
      updatedData.append("average_speed", formData.average_speed);
      updatedData.append("members_count", formData.members_count);
      updatedData.append("max_members", formData.max_members);
      updatedData.append("city", formData.city);
      if (formData.photo) {
        updatedData.append("photo", formData.photo);
      }
      if (formData.gpx_track) {
        updatedData.append("gpx_track", formData.gpx_track);
      }

      console.log(updatedData);
      try {
        const userData = getUserDataFromLocalStorage();
        console.log(userData);
        const axiosInstance = await getAxiosInstance(getAccessTokenSilently);
        const response = await axiosInstance.post(`events/`, updatedData);
        console.log(response);
        setFormData({
          name: "",
          description: "",
          owner: id,
          date: "",
          average_speed: "",
          members_count: "",
          max_members: "",
          city: "",
          photo: null,
          gpx_track: null,
        });
        setSelectedJpgFile("");
        setSelectedGpxFile("");
        setOpen(true);
        setResponse("Event successfully created!");
        setErrors({});
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        setOpen(true);
        setResponse("Something went wrong :(");
      }
    } else {
      console.log("There are errors");
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.description = formData.description
      ? ""
      : "Description is required.";
    tempErrors.date = formData.date ? "" : "Date is required.";
    tempErrors.average_speed =
      formData.average_speed >= 15 && formData.average_speed <= 50
        ? ""
        : "Speed must be an integer between 15 and 50.";
    tempErrors.city = formData.city ? "" : "City is required.";
    tempErrors.max_members =
      formData.max_members > 2 ? "" : "Event should have at least two members!";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "") && isValidFiles();
  };

  const isValidImageFile = (file) => {
    return file && file.type.match(/^image\/(jpeg|png|gif)$/);
  };

  const isValidGpxFile = (file) => {
    return file && file.name.endsWith(".gpx");
  };

  const isValidFiles = () => {
    return (
      (!formData.photo || isValidImageFile(formData.photo)) &&
      (!formData.gpx_track || isValidGpxFile(formData.gpx_track))
    );
  };

  return {
    formData,
    selectedGpxFile,
    selectedJpgFile,
    handleChange,
    handleJpgFileChange,
    handleGpxFileChange,
    handleSubmit,
    errors,
    open,
    setOpen,
    response,
    setResponse,
  };
};

export default useCreateRide;
