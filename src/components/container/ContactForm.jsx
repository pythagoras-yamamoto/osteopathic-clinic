import React, { useState } from "react";
import styled from "styled-components";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import { init, send } from "emailjs-com";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  //todo 電話番号

  const sendEmail = () => {
    const user_id = "user_lJKxWcZEtj7qKiZ1wNgb8";
    const service_id = "service_e4ptsmy";
    const template_id = "template_7x0uyj6";

    init(user_id);

    const template_param = {
      to_name: name,
      email: mail,
      message: message,
    };

    send(service_id, template_id, template_param).then(() => {
      console.log("success to send email");
      alert("お問い合わせを受けつけました");

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
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <form onSubmit={onSubmit}>
            <TextField
              id="outlined-multiline-flexible"
              className="contact-name"
              variant="outlined"
              type="text"
              required
              label="氏名(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeName}
              value={name}
              style={{ fontFamily: "Hannotate SC" }}
              // InputProps={{ disableUnderline: true }}
            />
            <TextField
              className="contact-mail"
              variant="outlined"
              type="text"
              required
              label="メールアドレスまたは電話番号(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeMail}
              value={mail}
            />
            <TextField
              className="contact-message"
              variant="outlined"
              type="text"
              required
              label="お問い合わせ内容(必須)"
              fullWidth
              margin="normal"
              onChange={onChangeMessage}
              value={message}
              style={{ fontFamily: "Zen Kaku Gothic Antique" }}
              // InputProps={{ disableUnderline: true }}
            />
            <SSpace />
              <Button
                className="contact-button"
                type="submit"
                color="primary"
                variant="outlined"
                size="large"
                style={{ fontFamily: "Yomogi" }}
              >
                送信
              </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const SSpace = styled.div`
  margin: 40px;
`;
