// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsTabs from 'src/views/forms/form-layouts/FormLayoutsTabs'
import FormLayoutsBasic from 'src/views/forms/form-layouts/FormLayoutsBasic'
import ViewHome from 'src/views/main/pages/Home'
import FormLayoutsSeparator from 'src/views/forms/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/forms/form-layouts/FormLayoutsAlignment'
import FormLayoutsCollapsible from 'src/views/forms/form-layouts/FormLayoutsCollapsible'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(8)} !important` }}>
          <ViewHome />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
