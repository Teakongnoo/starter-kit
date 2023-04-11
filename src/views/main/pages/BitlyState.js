// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// ** Icon Imports

import Icon from 'src/@core/components/icon'

// ** Import React
import { useState, useEffect } from 'react'
import Paper from 'src/@core/theme/overrides/paper'

const FormLayoutsIcons = () => {
  // Hook useState
  const [datas, setDatas] = useState([])
  const [botId, setBotId] = useState('')
  const [ownerId, setOwnerId] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [formValid, setFormValid] = useState(false)

  const inputBotId = event => {
    setBotId(event.target.value)
  }

  const inputOwnerId = event => {
    setOwnerId(event.target.value)
  }

  const inputAccessToken = event => {
    setAccessToken(event.target.value)
  }

  const inputSecretKey = event => {
    setSecretKey(event.target.value)
  }

  const onChange = () => {
    console.log('1234')
  }

  const onClick = event => {
    event.preventDefault()

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

  // useEffect(() => {
  //   const formCheck  = botId.trim().length > 0 ?setFormValid(true) : setFormValid(false);
  // }, [botId])

  useEffect(() => {
    // Update the document title using the browser API
    const formCheck = botId.trim().length > 0 ? setFormValid(true) : setFormValid(false)

    fetch('https://www.melivecode.com/api/users')
      .then(res => res.json())
      .then(result => {
        setDatas(result)
      })
  })

  return (
    <Grid container spacing={2}>
      {datas.map(data => (
        <Grid item xs={6} md={6} key={data.id}>
          <Card md={6} variant='outlined' key={data.id}>
            <CardHeader
              avatar={<Avatar alt={data.fname} src={data.avatar} />}
              title={data.fname}
              subheader='September 14, 2016'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography> {data.fname}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default FormLayoutsIcons
