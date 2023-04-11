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
                {data.fname}
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
