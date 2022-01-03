import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { init, send } from "emailjs-com";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const user_id = "user_lJKxWcZEtj7qKiZ1wNgb8";
    const service_id = "service_e4ptsmy";
    const template_id = "template_7x0uyj6";

    init(user_id);

    const template_param = {
      to_name: name,
      email: mail,
      message: message
    };

    send(service_id, template_id, template_param).then(() => {
      console.log("success to send email");

      setName("");
      setMail("");
      setMessage("");
    });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("push submit");
    sendEmail();
  };

  return (
    <div className="contact-page">
      <p className="contact-top">Contact</p>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={8}>
          <form onSubmit={onSubmit}>
            <TextField
              id="outlined-multiline-flexible"
              className="contact-name"
              type="text"
              required
              label="氏名(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeName}
              value={name}
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              className="contact-mail"
              type="text"
              required
              label="メールアドレス(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeMail}
              value={mail}
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              className="contact-message"
              type="text"
              required
              label="お問い合わせ内容(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeMessage}
              value={message}
              InputProps={{ disableUnderline: true }}
            />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
