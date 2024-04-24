import React from 'react';
import logo from '../images/pixel_logo.svg'
import Card from '../components/Card'

const Compare = () => {
  return (
    <div className="h-screen">
    <div className="flex flex-col items-center justify-content">
      <img className="p-[50px]" src={logo} alt="pixel logo"/>
      <div className="flex flex-col gap-[40px]">
        <h1 className="text-28px-font-size text-white mt-20 mx-[200px]">XXX Errors Found</h1>
        {/* use map function to populate cards */}
        <Card className="mx-[200px]">
          {/* backend stuff */}
        </Card>
      </div>
      </div>
    </div>
  );
}

export default Compare


// REWRITE TO FIT REACT

        // document.getElementById('pagesDropdown').onchange = function() {
        //     var selectedPage = document.getElementById("pagesDropdown").value;

        //     // make request to backend for page specific frames
        //     $.ajax({
        //         url: "/api/" + selectedPage + "/"
        //     }).done(function(response) {
        //         var framesDropdown = document.getElementById("framesDropdown");
        //         framesDropdown.innerHTML = ""; // Clear existing options
                
        //         if (response.length > 0) {
        //             // add a placeholder option
        //             var firstOption = document.createElement("option");
        //             firstOption.text = "-- select a frame --";
        //             firstOption.disabled = true;
        //             firstOption.selected = true;
        //             framesDropdown.add(firstOption);

        //             // add options for each screen name
        //             response.forEach(function(frame) {
        //                 var option = document.createElement("option");
        //                 option.text = frame;
        //                 option.value = frame;
        //                 framesDropdown.add(option);
        //             });
        //         } else {
        //             // Show "Please select a page first" message
        //             var option = document.createElement("option");
        //             option.text = "Please select a page first";
        //             framesDropdown.add(option);
        //         }
        //     });
            
        // }

        // // dummy event handler for now, but action for "check differences" button
        // // make request to backend for screenshots?
        // document.getElementById("checkDifferencesBtn").addEventListener("click", function() {
        //     var selectedPage = document.getElementById("pagesDropdown").value;
        //     var selectedFrame = document.getElementById("framesDropdown").value;

        //     var selectedDeployedPage = document.getElementById("deployedPagesDropdown").value;

        //     $.ajax({
        //         url: "/api/compare/",
        //         data: {
        //             selectedPage:  selectedPage,
        //             selectedFrame: selectedFrame,
        //             selectedDeployedPage: selectedDeployedPage
        //         }
        //     }).done(function(response) {
        //         console.log("RESPONSE");
        //         console.log(response);
        //         document.getElementById('response').innerHTML = response['choices'][0]['message']['content'];
        //     });
        // });
