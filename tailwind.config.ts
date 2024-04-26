import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const mantineColor = {
  primary:{
    0:"#ebf8ff", 
    1:"#d6eefa", 
    2:"#a8dcf7", 
    3:"#57baf4", 
    4:"#3dabf4", 
    5:"#2484c3", 
    6:"#016699", 
    7:"#01496e", 
    8:"#013a57", 
    9:"#01293d",
    DEFAULT:"#016699",
  },
  secondary:{
    0:"#fff5e0", 
    1:"#ffe9cb", 
    2:"#ffd399", 
    3:"#ffbb65", 
    4:"#fda637", 
    5:"#f59d2f", 
    6:"#fd991a", 
    7:"#e27e00", 
    8:"#ca6f00", 
    9:"#b05f00",
    DEFAULT:"#fd991a"
  },
  danger:{
    0:"#ffe9e9", 
    1:"#ffd3d3", 
    2:"#f6a5a6", 
    3:"#ef7476", 
    4:"#e94c4d", 
    5:"#e63132", 
    6:"#e52224", 
    7:"#cb1418", 
    8:"#b60c14", 
    9:"#9f000e",
    DEFAULT:"#e52224"
  },
  success:{
    0:"#e7fef1", 
    1:"#d5f8e5", 
    2:"#aceeca", 
    3:"#80e5ad", 
    4:"#5bdd94", 
    5:"#44d884", 
    6:"#35d67c", 
    7:"#26bd69", 
    8:"#1aa85d", 
    9:"#00914d",
    DEFAULT:"#35d67c"
  },
  warning:{
    0:"#fff4e0", 
    1:"#ffe6cb", 
    2:"#ffcc99", 
    3:"#ffb063", 
    4:"#ff9836", 
    5:"#ff8918", 
    6:"#ff8105", 
    7:"#e46e00", 
    8:"#cb6200", 
    9:"#b15200",
    DEFAULT:"#ff8105"
  },
  info:{
    0:"#e0ffff", 
    1:"#ccfbff", 
    2:"#9cf4ff", 
    3:"#68eefe", 
    4:"#44e8fe", 
    5:"#30e5fd", 
    6:"#1ee5fe", 
    7:"#00cae3", 
    8:"#00b5ca", 
    9:"#009db1",
    DEFAULT:"#1ee5fe"
  },
  tertiary:{
    0:"#eef4ff", 
    1:"#e1e7ee", 
    2:"#c6ccd5", 
    3:"#a8afbc", 
    4:"#8e97a7", 
    5:"#7d889a", 
    6:"#748094", 
    7:"#616e81", 
    8:"#546276", 
    9:"#45546a",
    DEFAULT:"#748094"
  },
  dark: {
    0:"#C1C2C5",
    1:"#A6A7AB",
    2:"#909296",
    3:"#5C5F66",
    4:"#373A40",
    5:"#2C2E33",
    6:"#25262B",
    7:"#1A1B1E",
    8:"#141517",
    9:"#101113",
    DEFAULT:"#25262B"
  },
  gray: {
    0:"#F8F9FA",
    1:"#F1F3F5",
    2:"#E9ECEF",
    3:"#DEE2E6",
    4:"#CED4DA",
    5:"#ADB5BD",
    6:"#868E96",
    7:"#495057",
    8:"#343A40",
    9:"#212529",
    DEFAULT:"#868E96"
  },
  red: {
    0:"#FFF5F5",
    1:"#FFE3E3",
    2:"#FFC9C9",
    3:"#FFA8A8",
    4:"#FF8787",
    5:"#FF6B6B",
    6:"#FA5252",
    7:"#F03E3E",
    8:"#E03131",
    9:"#C92A2A",
    DEFAULT:"#FA5252"
  },
  pink: {
    0:"#FFF0F6",
    1:"#FFDEEB",
    2:"#FCC2D7",
    3:"#FAA2C1",
    4:"#F783AC",
    5:"#F06595",
    6:"#E64980",
    7:"#D6336C",
    8:"#C2255C",
    9:"#A61E4D",
    DEFAULT:"#E64980"
  }, 
  grape: {
    0:"#F8F0FC",
    1:"#F3D9FA",
    2:"#EEBEFA",
    3:"#E599F7",
    4:"#DA77F2",
    5:"#CC5DE8",
    6:"#BE4BDB",
    7:"#AE3EC9",
    8:"#9C36B5",
    9:"#862E9C",
    DEFAULT:"#BE4BDB"
  },
  violet:{
    0:"#F3F0FF",
    1:"#E5DBFF",
    2:"#D0BFFF",
    3:"#B197FC",
    4:"#9775FA",
    5:"#845EF7",
    6:"#7950F2",
    7:"#7048E8",
    8:"#6741D9",
    9:"#5F3DC4",
    DEFAULT:"#7950F2"
  }, 
  indigo: {
    0: "#EDF2FF",
    1: "#DBE4FF",
    2: "#BAC8FF",
    3: "#91A7FF",
    4: "#748FFC",
    5: "#5C7CFA",
    6: "#4C6EF5",
    7: "#4263EB",
    8: "#3B5BDB",
    9: "#364FC7",
    DEFAULT:"#4C6EF5"
  },
  blue: {
    0:"#E7F5FF",
    1:"#D0EBFF",
    2:"#A5D8FF",
    3:"#74C0FC",
    4:"#4DABF7",
    5:"#339AF0",
    6:"#228BE6",
    7:"#1C7ED6",
    8:"#1971C2",
    9:"#1864AB",
    DEFAULT:"#228BE6"
  },
  cyan: {
    0:"#E3FAFC",
    1:"#C5F6FA",
    2:"#99E9F2",
    3:"#66D9E8",
    4:"#3BC9DB",
    5:"#22B8CF",
    6:"#15AABF",
    7:"#1098AD",
    8:"#0C8599",
    9:"#0B7285",
    DEFAULT:"#15AABF"
  },
  teal: {
    0:"#E6FCF5",
    1:"#C3FAE8",
    2:"#96F2D7",
    3:"#63E6BE",
    4:"#38D9A9",
    5:"#20C997",
    6:"#12B886",
    7:"#0CA678",
    8:"#099268",
    9:"#087F5B",
    DEFAULT:"#12B886"
  },
  green: {
    0:"#EBFBEE",
    1:"#D3F9D8",
    2:"#B2F2BB",
    3:"#8CE99A",
    4:"#69DB7C",
    5:"#51CF66",
    6:"#40C057",
    7:"#37B24D",
    8:"#2F9E44",
    9:"#2B8A3E",
    DEFAULT:"#40C057"
  },
  lime: {
    0:"#F4FCE3",  
    1:"#E9FAC8",  
    2:"#D8F5A2",  
    3:"#C0EB75",  
    4:"#A9E34B",  
    5:"#94D82D",  
    6:"#82C91E",  
    7:"#74B816",  
    8:"#66A80F",  
    9:"#5C940D",
    DEFAULT:"#82C91E"
  },
  yellow: {
    0:"#FFF9DB",
    1:"#FFF3BF",
    2:"#FFEC99",
    3:"#FFE066",
    4:"#FFD43B",
    5:"#FCC419",
    6:"#FAB005",
    7:"#F59F00",
    8:"#F08C00",
    9:"#E67700",
    DEFAULT:"#FAB005"
  },
  orange: {
    0:"#FFF4E6",
    1:"#FFE8CC",
    2:"#FFD8A8",
    3:"#FFC078",
    4:"#FFA94D",
    5:"#FF922B",
    6:"#FD7E14",
    7:"#F76707",
    8:"#E8590C",
    9:"#D9480F",
    DEFAULT:"#FD7E14"
  }
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0d0d0d",
        ...mantineColor,
      },
      screens: {
        "2xsm": "375px",
        xsm: "425px",
        "3xl": "2000px",
      },
      fontSize: {
        xxs: '.625rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', "Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
        },
      }
    }
  },
  plugins: [],
};
export default config;
