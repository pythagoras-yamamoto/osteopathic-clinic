import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core';
import { init, send } from 'emailjs-com';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

export const ContactForm = () => {
  const [date, setDate] = useState(new Date('2022-08-18T21:11:00'));
  const [course, setCourse] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    const user_id = 'user_lJKxWcZEtj7qKiZ1wNgb8';
    const service_id = 'service_e4ptsmy';
    const template_id = 'template_7x0uyj6';

    init(user_id);

    const template_param = {
      reserved_date: date,
      course: course,
      to_name: name,
      email: mail,
      message: message
    };

    send(service_id, template_id, template_param).then(() => {
      alert('お問い合わせを受けつけました');

      setDate(new Date('2022-08-18T21:11:00'));
      setCourse('');
      setName('');
      setMail('');
      setMessage('');
    });
  };

  const onChangeDate = (e) => {
    setDate(e);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeCourse = (e) => {
    setCourse(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('push submit');
    sendEmail();
  };

  return (
    <div className="contact-page">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <form onSubmit={onSubmit}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-between">
                <KeyboardDatePicker
                  style={{ width: 400 }}
                  disableToolbar
                  variant="inline"
                  required
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="ご希望日"
                  value={date}
                  onChange={onChangeDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
                <KeyboardTimePicker
                  style={{ width: 400 }}
                  variant="inline"
                  required
                  margin="normal"
                  id="time-picker"
                  label="ご希望時間"
                  value={date}
                  onChange={onChangeDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change time'
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <FormControl fullWidth required>
              <InputLabel style={{ fontSize: 16 }} htmlFor="age-native-simple">
                ご希望コース
              </InputLabel>
              <Select
                native
                value={course}
                onChange={onChangeCourse}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple'
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>コースA ボディリバランス</option>
                <option value={2}>
                  コースB フェイシャルトリートメント ＋ ヘッドリラクゼーション
                </option>
                <option value={3}>
                  コースC ボディリバランス ＋ ヘッドリラクゼーション
                </option>
                <option value={4}>
                  コースD ボディリバランス ＋ フェイシャルトリートメント
                </option>
              </Select>
            </FormControl>
            <TextField
              InputLabelProps={{ style: { fontSize: 16 } }} // font size of input text
              variant="standard"
              type="text"
              required
              label="ご氏名"
              fullWidth
              margin="normal"
              onChange={onChangeName}
              value={name}
            />
            <TextField
              InputLabelProps={{ style: { fontSize: 16 } }} // font size of input text
              variant="standard"
              type="text"
              required
              label="メールアドレスまたは電話番号"
              fullWidth
              margin="normal"
              onChange={onChangeMail}
              value={mail}
            />
            <TextField
              InputLabelProps={{ style: { fontSize: 16 } }} // font size of input text
              variant="standard"
              type="text"
              label="その他"
              fullWidth
              margin="normal"
              onChange={onChangeMessage}
              value={message}
            />
            <SSpace />
            <Button
              type="submit"
              color="primary"
              variant="outlined"
              size="large"
              style={{ fontFamily: 'Yomogi' }}
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
