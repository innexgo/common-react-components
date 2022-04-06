export default interface Branding {
  // Name of product
  name: string,
  // Quick few word description of product
  tagline: string,
  // url to homepage (publically accessible)
  homeUrl: string,
  // url to the register page (publically accessible)
  registerUrl: string,
  // url to the forgot password page (publically accessible)
  forgotPasswordUrl: string,
  // url to the dashboard page
  dashboardUrl: string,
  // url to the Instructions (publically accessible)
  instructionUrl?: string,
  // url to the TOS (publically accessible)
  tosUrl?: string,
  // Copyright
  copyrightOrg?: string,
  // Image element adapted for light background
  lightAdaptedIcon: string,
  // Image element adapted for dark theme
  darkAdaptedIcon: string,
}
