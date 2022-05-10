import EmailLI from "./EmailLI";
import "./styles/emails.css";

function EmailsUL(props) {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;

  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <EmailLI
          email={email}
          index={index}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
}

export default EmailsUL;
