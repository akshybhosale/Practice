import { useState } from "react";
function Contact() {
  const [userQuery, setUserQuery] = useState('');

const searchQuery= () => {
  window.open(`https://google.com/search?q=${userQuery}`, 'blank');
}

  const updateUserQuery = event => {
    console.log('event', setUserQuery);
    setUserQuery(event.target.value);
   
  }
  return (
    <div>
      <h2>This is a My Contact</h2>
      <hr />
      
        <p className="new-hook">Below are the hook concept</p>
      
        <div className="form">
          <input value={userQuery} onChange={updateUserQuery} />
          <button onClick={searchQuery}>Search</button>
        </div>
        
    </div>
  );
}
export default Contact;
