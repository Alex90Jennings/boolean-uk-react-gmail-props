function EmailDetail(props) {
  const email = props.email;
  const setShowEmail = props.setShowEmail;
  const showEmail = props.showEmail;

  return (
    <div>
      <p>{email.title}</p>;
      <button onClick={() => setShowEmail(!showEmail)}>Return To Emails</button>
    </div>
  );
}

export default EmailDetail;
