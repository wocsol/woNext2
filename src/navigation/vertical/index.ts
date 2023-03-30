// ** Icon imports
import Link from 'mdi-material-ui/Link'
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// my imports
import { Image } from 'mdi-material-ui'
// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [ 
    {
      sectionTitle: 'Important Web Tools'
    },
    {
      title: 'Website Worth Calculator',
      icon: Link,
      path: '/website-value',
    },
    {
      title: 'SEO Analyser/Tools',
      icon: Link,
      path: '/seo',
    },
    {
      title: 'Image Resizer Online',
      icon: Link,
      path: '/image-resizer',
    },
    {
      title: 'Online DOCS Converter',
      icon: Link,
      path: '/convert-online',
    },
    {
      title: 'Image Format Converter',
      icon: Link,
      path: '/image-convert',
    },
    {
      title: 'Download Link Maker',
      icon: Link,
      path: '/link-generator',
    },
    {
      title: 'Whatsapp Share Link',
      icon: Link,
      path: '/wal',
    },
    {
      title: 'DNS Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/dns_lookup',
    },
    {
      title: 'IP Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/ip_lookup',
    },
    {
      title: 'SSL Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/ssl_lookup',
    },
    {
      title: 'Whois Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/whois_lookup',
    },
    {
      title: 'Ping Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/ping',
    },
    {
      title: 'MD5 Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/md5_generator',
    },
    {
      title: 'Base64 Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/base64_converter',
    },
    {
      title: 'Base64 Image Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/base64_image_converter',
    },
    {
      title: 'URL Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/url_converter',
    },
    {
      title: 'Lorem Ipsum Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/lorem_ipsum_generator',
    },
    {
      title: 'Markdown to HTML',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/markdown_to_html',
    },
    {
      title: 'Case Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/case_converter',
    },
    {
      title: 'UUID V4 Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/uuid_v4_generator',
    },
    {
      title: 'Bcrypt Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/bcrypt_generator',
    },
    {
      title: 'Password Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/password_generator',
    },
    {
      title: 'Password Strength Checker',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/password_strength_checker',
    },
    {
      title: 'Slug Generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/slug_generator',
    },
    {
      title: 'HTML Minifier',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/html_minifier',
    },
    {
      title: 'CSS Minifier',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/css_minifier',
    },
    {
      title: 'JS Minifier',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/js_minifier',
    },
    {
      title: 'User Agent Parser',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/user_agent_parser',
    },
    {
      title: 'Website Hosting Checker',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/website_hosting_checker',
    },
    {
      title: 'Character Counter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/character_counter',
    },
    {
      title: 'DNS Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/',
    },
    {
      title: 'URL Parser',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/url_parser',
    },
    {
      title: 'Color Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/color_converter',
    },
    {
      title: 'HTTP Headers Lookup',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/http_headers_lookup',
    },
    {
      title: 'Duplicate Lines Remover',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/duplicate_lines_remover',
    },
    {
      title: 'Text to Speech',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/text_to_speech',
    },
    {
      title: 'IDN Punnycode Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/idn_punnycode_converter',
    },
    {
      title: 'JSON Validator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/json_validator_beautifier',
    },
    {
      title: 'QR Code Reader',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/qr_code_reader',
    },
    {
      title: 'Meta Tags Checker',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/meta_tags_checker',
    },
    {
      title: 'Exif Reader',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/exif_reader',
    },
    {
      title: 'SQL Formatter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/sql_beautifier',
    },
    {
      title: 'HTML Entity Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/html_entity_converter',
    },
    {
      title: 'Binary Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/binary_converter',
    },
    {
      title: 'Hex Converter',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/hex_converter',
    },
    {
      title: 'Mailto link generator',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/mailto_link_generator',
    },
    {
      title: 'Safe URL Checker',
      icon: Link,
      path: 'https://webtools.wocsol.com/tools/safe_url_checker',
    },
    {
      title: 'Image Converter',
      icon: Image,
      path: '/image-converter',
    }
    
    // ,
    // {
    //   title: 'Dashboard',
    //   icon: HomeOutline,
    //   path: '/dashboard',
    // },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}



export default navigation
