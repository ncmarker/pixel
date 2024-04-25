import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import ButtonPurp from '../components/Buttonpurp';
import logo from '../images/pixel_logo.svg';
import Card from '../components/Card';
import Paginator from '../components/Paginator';
import InputText from '../components/InputText';

import Spinner from '../components/Spinner';

const Enterlinks = () => {
  const [figmaLink, setFigmaLink] = useState("");
  const [prototypeLink, setPrototypeLink] = useState("");
  const [figmaLinkErrorMsg, setFigmaLinkErrorMsg] = useState("");
  const [prototypeLinkErrorMsg, setPrototypeLinkErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function isValidLink(link) {
    // Regular expression to match URLs
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(link);
  }

  const handleSubmit = async () => {
    // Check if the links are valid
    const isFigmaLinkValid = isValidLink(figmaLink);
    const isPrototypeLinkValid = isValidLink(prototypeLink);

    // Update error state accordingly
    setFigmaLinkErrorMsg(isFigmaLinkValid ? "" : "Please enter a valid Figma file link.");
    setPrototypeLinkErrorMsg(isPrototypeLinkValid ? "" : "Please enter a valid deployed site link.");

    // make API request if links valid
    if (isFigmaLinkValid && isPrototypeLinkValid) {
      setLoading(true);
      try {
        const response = await Axios.post('http://localhost:3001/convertlinks', {
          figmaLink: figmaLink,
          prototypeLink: prototypeLink
        }, {
          withCredentials: true  // include cookies 
        });

        if (response.status === 200) {
          console.log(response.data);
          navigate('/pickscreens', { state: { pageData: response.data } });
        }
      } catch(error) {
          console.error('Error', error);
          // show error to user
          setFigmaLinkErrorMsg("Error Processing Request.");
          setPrototypeLinkErrorMsg("Error Processing Request.");
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <div className="h-screen overflow-y-hidden">
    <Paginator filledLines='1' className="mx-auto mb-[159px] mt-[78px]"/>
        <Card className="p-[60px] flex flex-col gap-[40px] min-h-[500px]">
            <img className="w-[88px] mx-auto" src={logo} alt="pixel logo" />
            {loading ? ( 
                <Spinner color='var(--purple-main)'/>
            ) : (
              <>
                <InputText 
                  label="Figma File" 
                  placeholder='Link to Figma file' 
                  value={figmaLink} 
                  setValue={setFigmaLink} 
                  errorMsg={figmaLinkErrorMsg}
                />
                <InputText 
                  label="Deployed Prototype" 
                  placeholder='Link to deployed site' 
                  value={prototypeLink} 
                  setValue={setPrototypeLink} 
                  errorMsg={prototypeLinkErrorMsg}
                />
                <ButtonPurp text="Next" clickHandle={handleSubmit}/>
              </>
            )}
        </Card>
    </div>
  );
};

export default Enterlinks;