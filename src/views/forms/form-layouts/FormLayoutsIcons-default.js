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

const FormLayoutsIcons = () => {
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
                      <Icon icon='bx:user' />
                    </InputAdornment>
                  )
                }}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='bx:phone' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label='Message'
                placeholder='Bio...'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='bx:message' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
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
