import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {font-family: 'FiraSans-Black'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Black.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-BlackItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-BlackItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Bold'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Bold.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-BoldItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-BoldItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-ExtraBold'; src: url(/assets/Fonts/Fira_Sans/FiraSans-ExtraBold.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-ExtraBoldItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-ExtraBoldItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-ExtraLight'; src: url(/assets/Fonts/Fira_Sans/FiraSans-ExtraLight.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-ExtraLightItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-ExtraLightItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Italic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Italic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Light'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Light.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-LightItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-LightItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Medium'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Medium.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-MediumItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-MediumItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Regular'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Regular.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-SemiBold'; src: url(/assets/Fonts/Fira_Sans/FiraSans-SemiBold.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-SemiBoldItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-SemiBoldItalic.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-Thin'; src: url(/assets/Fonts/Fira_Sans/FiraSans-Thin.ttf) format('truetype');}
  @font-face {font-family: 'FiraSans-ThinItalic'; src: url(/assets/Fonts/Fira_Sans/FiraSans-ThinItalic.ttf) format('truetype');}

  @font-face {font-family: 'Montserrat-Black'; src: url(/assets/Fonts/Montserrat/Montserrat-Black.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-BlackItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-BlackItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Bold'; src: url(/assets/Fonts/Montserrat/Montserrat-Bold.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-BoldItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-BoldItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-ExtraBold'; src: url(/assets/Fonts/Montserrat/Montserrat-ExtraBold.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-ExtraBoldItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-ExtraLight'; src: url(/assets/Fonts/Montserrat/Montserrat-ExtraLight.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-ExtraLightItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-ExtraLightItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Italic'; src: url(/assets/Fonts/Montserrat/Montserrat-Italic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Light'; src: url(/assets/Fonts/Montserrat/Montserrat-Light.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-LightItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-LightItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Medium'; src: url(/assets/Fonts/Montserrat/Montserrat-Medium.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-MediumItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-MediumItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Regular'; src: url(/assets/Fonts/Montserrat/Montserrat-Regular.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-SemiBold'; src: url(/assets/Fonts/Montserrat/Montserrat-SemiBold.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-SemiBoldItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-SemiBoldItalic.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-Thin'; src: url(/assets/Fonts/Montserrat/Montserrat-Thin.ttf) format('truetype'); font-display: swap;}
  @font-face {font-family: 'Montserrat-ThinItalic'; src: url(/assets/Fonts/Montserrat/Montserrat-ThinItalic.ttf) format('truetype'); font-display: swap;}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    font-family: Montserrat-Regular, sans-serif;
  }
`;