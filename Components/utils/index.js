export const isValidToken = (token) => {
    try {
      if (
        token === null ||
        token === undefined ||
        token === "undefined" ||
        token === ""
      ) {
        throw new Error("token is empty");
      }
      const tokenArr = token.split(".");
      if (tokenArr.length < 2) {
        throw new Error("invalid token");
      }
      const header = JSON.parse(atob(tokenArr[0]));
      const body = JSON.parse(atob(tokenArr[1]));
  
      validateHeader(header);
      validateBody(body);
  
      return { data: true };
    } catch (e) {
      return { data: false, error: e.message };
    }
  };
  
  const validateHeader = (header) => {
    if (header) {
      if (header.typ !== "JWT") {
        throw new Error("header is not JWT");
      }
    }
  };
  
  const validateBody = (body) => {
    const clientId="145819553278-quf38k7elp90jmps0lpo3mrke9bcq9an.apps.googleusercontent.com";
    if (body) {
      const emailId = body.email;
      const domain = emailId.split("@")[1];
      const currentTime = new Date().getTime();
      const expireToken = body.exp * 1000;
  
      if (body.aud !== clientId) {
        throw new Error("Invalid Credential");
      }
      if (domain !== "skimbox.us" && domain !== "holidaykeepers.com") {
        throw new Error("Invalid Email");
      }
      if (currentTime > expireToken) {
        //error check
        throw new Error("Token is Expired");
      }
    } else {
      throw new Error("Invalid payload");
    }
  };
  