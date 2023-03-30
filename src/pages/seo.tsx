// ** MUI Imports
import Grid from '@mui/material/Grid'
import SEOAnalyzer from 'src/@core/components/seo'

// ** Icons Imports
// ** Custom Components Imports
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
//my imports
const seo = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      
        <Grid item xs={12} md={12} sm={12}>
          <h1>Seo Analyser Tool</h1>
              
        </Grid>

        <Grid>
          <SEOAnalyzer />
          </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default seo
