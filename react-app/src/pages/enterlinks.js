import React from 'react';

export default function EnterLinks() {
  return (
    <div>
      <h1>Hello, <span id="username">User</span>!</h1>
        <form action="/home" method="POST">
            <label for="figma_file_url">Enter Link to Figma File:</label>
            <input type="text" id="figma_file_url" name="figma_file_url" placeholder="Enter link to Figma File" required/>
            
            <label for="deployed_url">Enter Link to Deployed Project:</label>
            <input type="text" id="deployed_url" name="deployed_url" placeholder="Enter link to Deployed Project" required/>
            
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  );
}
