import React from 'react';

export default function ComparePage() {
  return (
    <div>

    </div>
  );
}


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
