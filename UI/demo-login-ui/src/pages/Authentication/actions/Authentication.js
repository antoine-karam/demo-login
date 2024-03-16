import secureLocalStorage from "react-secure-storage";

export const getAuthentication = () => {
  const userName = secureLocalStorage.getItem("userName");
  const email = secureLocalStorage.getItem("userEmail");
  const position = secureLocalStorage.getItem("userPosition");

  if (!userName) {
    return {
      userName : "",
      email:"",
      position:"",
    };
  }

  return { userName, email, position };
};
