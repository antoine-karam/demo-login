import secureLocalStorage from "react-secure-storage";

export const getAuthentication = () => {
  const userName = secureLocalStorage.getItem("userName");
  const image = secureLocalStorage.getItem("userImage");
  const position = secureLocalStorage.getItem("userPosition");

  if (!userName) {
    return {
      userName : "test",
      image:"test",
      position:"test",
    };
  }

  return { userName, image, position };
};
