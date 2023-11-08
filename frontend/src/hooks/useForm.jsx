import { useState, useEffect } from "react";

function useForm(userDetails) {
  const [values, setValues] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userDetails) {
      console.log(userDetails);
      setValues({
        nickname: userDetails.nickname,
        distance: userDetails.preferences?.distance || "",
        average: userDetails.preferences?.average || "",
        city: userDetails.preferences?.city || "",
      });
    }
  }, [userDetails]);

  return {
    values,
    handleChange,
  };
}

export default useForm;
