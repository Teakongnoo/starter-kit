// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Import React
import { useState, useEffect } from 'react'

const FormLayoutsIcons = () => {
  // Hook useState
  const [botId, setBotId] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [ formValid,setFormValid] = useState(false);

  const inputBotId = (event) => {
    setBotId(event.target.value);
  }

  const inputOwnerId = (event) => {
    setOwnerId(event.target.value);
  }

  const inputAccessToken = (event) => {
    setAccessToken(event.target.value);
  }

  const inputSecretKey = (event) => {
    setSecretKey(event.target.value);
  }


  const onChange = () => {
    console.log('1234');
  }

  const onClick = (event) => {
    event.preventDefault();

    const formData = {
      botId: botId,
      ownerId: ownerId,
      accessToken: accessToken,
      secretKey: secretKey
    }
    console.log(formData)
    setBotId('')
    setOwnerId('')
    setAccessToken('')
    setSecretKey('')
  }

  useEffect(() => {
    const formCheck  = botId.trim().length > 0 ?setFormValid(true) : setFormValid(false);
  }, [botId])

  return (
    <Card>
      <CardHeader title='ข้อมูลสำหรับตั้งค่า Line Official' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Bot ID (Line ID)'
                placeholder='12345678xxxx'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mingcute:line-app-line' />
                    </InputAdornment>
                  )
                }}

                onChange={inputBotId}

                value={botId}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Owner User ID'
                placeholder='12345678xxxx'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='bx:user' />
                    </InputAdornment>
                  )
                }}

                onChange={inputOwnerId }

                value={ownerId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Channel Access Token'
                placeholder='12345678xxxx'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='bx:user' />
                    </InputAdornment>
                  )
                }}
                value={accessToken}

              onChange = {inputAccessToken}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='text'
                label='Secret Key'
                placeholder='Secret Key'

                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='bx:envelope' />
                    </InputAdornment>
                  )
                }}
                value={secretKey}
                onChange={inputSecretKey}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large' onClick={onClick} disabled={!formValid}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
