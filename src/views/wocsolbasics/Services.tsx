// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

//my imports
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import WebsiteDevelopment from 'src/views/wocsolbasics/servicelist/WebsiteDevelopment'
import BulkSMSServices from 'src/views/wocsolbasics/servicelist/BulkSMSServices'
import WebHosting from 'src/views/wocsolbasics/servicelist/WebHosting'
import TradingPlatforms from 'src/views/wocsolbasics/servicelist/TradingPlatforms'
import SocialMediaMarketing from 'src/views/wocsolbasics/servicelist/SocialMediaMarketing'
import SearchEngineOptimization from 'src/views/wocsolbasics/servicelist/SearchEngineOptimization'
import MobileAppDevelopment from 'src/views/wocsolbasics/servicelist/MobileAppDevelopment'
import GameDevelopmentServices from 'src/views/wocsolbasics/servicelist/GameDevelopmentServices'
import DomainRegistration from 'src/views/wocsolbasics/servicelist/DomainRegistration'
import CloneWebsites from 'src/views/wocsolbasics/servicelist/CloneWebsites'


interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: DataType[] = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const Services = () => {
  return (



  

    <Card>
      <CardHeader
        title={<h3>Wocsol Services</h3>}
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
             All services offered by wocsol
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
       <Grid container spacing={6}  sx={{ pl : 2 , pr : 2 }}>
         <Grid item xs={12} sm={6} md={2}>
             <WebsiteDevelopment />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <MobileAppDevelopment />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <SearchEngineOptimization />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <WebHosting />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <DomainRegistration />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <SocialMediaMarketing />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <GameDevelopmentServices />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <BulkSMSServices />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <CloneWebsites />
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
             <TradingPlatforms />
         </Grid>
    </Grid>

    </Card>
  )
}

export default Services
