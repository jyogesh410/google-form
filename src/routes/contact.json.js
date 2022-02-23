export const post = async (request) => {
    //get this using prefill link
   // const formID = "1FAIpQLSdMMvK0wDsz_kCbtxi3_44tseD-SACbVO9WBXR8aBdeQ"
    
    const name = request.body.get("name");
    const email = request.body.get("email");
    const age = request.body.get("age");
    const number = request.body.get("number");
  
    const res= await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSctp2Fch_RsTbrkTTCIiyulB6n8NbOFH-gcYt4f_E3yiXV0ug/formResponse?usp=pp_url&entry.1472671802=${name}&entry.296617260=${email}&entry.1077082827=${age}&entry.691493390=${number}&submit=Submit`);
  
    if (res.status === 200) {
      return {
        status: 200,
        body: {
          message: "success",
        },
      };
    } else {
      return {
        status: 404,

        body: {
          message: "failed",
        },
      };
    }
  };