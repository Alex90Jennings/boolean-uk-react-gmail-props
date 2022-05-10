import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/app.css";

import EmailsUL from "./EmailsUL";
import Header from "./Header";
import Nav from "./Nav.js";
import EmailDetail from "./EmailDetail";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [showEmail, setShowEmail] = useState(false);
  const [displayEmail, setDisplayEmail] = useState({});

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header />
      <Nav
        currentTab={currentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
      />
      <main className="emails">
        {!showEmail ? (
          <EmailsUL
            filteredEmails={filteredEmails}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            setShowEmail={setShowEmail}
          />
        ) : (
          <EmailDetail
            displayEmail={displayEmail}
            setDisplayEmail={setDisplayEmail}
            setShowEmail={setShowEmail}
          />
        )}
      </main>
    </div>
  );
}

export default App;
