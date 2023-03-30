// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
// ** Custom Components Imports
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'

//my imports
import WocsolTitle from 'src/views/wocsolbasics/WocsolTitle'
import AboutWocsol from 'src/views/wocsolbasics/AboutWocsol'
import Services from 'src/views/wocsolbasics/Services'
import Scope from 'src/views/wocsolbasics/Scope'
import ReadymadeScripts from 'src/views/wocsolbasics/ReadymadeScripts'
import ContactUs from 'src/views/wocsolbasics/ContactUs'
import WhatsAppWidget from 'src/views/homepage/WhatsAppWidget'

const home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      
        <Grid item xs={12} md={12} sm={12}>
          <WocsolTitle /> 
          <AboutWocsol />        
        </Grid>
        <Grid item xs={12}>
          <Services />
        </Grid>
        <Grid item xs={12}>
          <Scope />
        </Grid>
        <Grid item xs={12}>
        <ReadymadeScripts />
        </Grid>
        <Grid item xs={12}>
        <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
        <ContactUs />
        <WhatsAppWidget />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default home
