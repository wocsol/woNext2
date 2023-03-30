// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

// custom

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import MenuItem from '@mui/material/MenuItem'

import Chip from '@mui/material/Chip'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const styles = {
  py: 2,
  px: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: 'text.secondary'
  }
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          > 
            <Menu />
          </IconButton>
        ) : null}

        {hidden ?  ( <a href="/"> <img src="/images/logo.png" width="200px" height="50" /></a> ) : (
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box className='actions-right' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              <MenuItem sx={{ p: 0 }}>
                <Button
                  size='small'
                  variant='contained'
                  component='a'
                  rel='noreferrer'
                  sx={{
                    p: 4,
                    mr: 2,
                    display: 'flex',
                    height: 30,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    fontWeight: 1000
                  }}
                  href='/'
                >
                  Home
                </Button>
              </MenuItem>
              <MenuItem sx={{ p: 0 }}>
                <Button
                  size='small'
                  variant='contained'
                  component='a'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    p: 4,
                    mr: 2,
                    display: 'flex',
                    height: 30,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    fontWeight: 1000
                  }}
                  href='https://webhosting.live/'
                >
                  FreeWebHosting
                </Button>
              </MenuItem>
              <MenuItem sx={{ p: 0 }}>
                <Button
                  size='small'
                  variant='contained'
                  component='a'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    p: 4,
                    mr: 2,
                    display: 'flex',
                    height: 30,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    fontWeight: 1000
                  }}
                  href='https://webhostpig.com/'
                >
                  DataServers & Hosting Tools
                </Button>
              </MenuItem>
              <MenuItem sx={{ p: 0 }}>
                <Button
                  size='small'
                  variant='contained'
                  component='a'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    p: 4,
                    mr: 2,
                    display: 'flex',
                    height: 30,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    fontWeight: 1000
                  }}
                  href='https://news.wocsol.com/'
                >
                  WocsNews
                </Button>
              </MenuItem>
              <MenuItem sx={{ p: 0 }}>
                <Button
                  size='small'
                  variant='contained'
                  component='a'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    p: 4,
                    mr: 2,
                    display: 'flex',
                    height: 30,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    fontWeight: 1000
                  }}
                  href='https://igoogle.online/'
                >
                  PublicArchives
                </Button>
              </MenuItem>{' '}
            </Box>{' '}
          </Box>
          
        )}
        
      </Box>

      {hidden ? (
          <Box className='actions-right' sx={{ display: 'flex',  justifyContent: 'flex-end', }}>
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          {/* <NotificationDropdown /> */}
          {/* <UserDropdown /> */}
        </Box>
        ) : <Box className='actions-left' sx={{ display: 'flex', marginRight: '500px' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {/* <NotificationDropdown /> */}
        {/* <UserDropdown /> */}
      </Box>}
      
    </Box>
  )
}

export default AppBarContent
