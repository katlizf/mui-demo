const {createTheme} = require("@mui/material/styles")
// required

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#bd0707',
        },
        secondary: {
          main: '#ffc510',
        },
    }
})

export default theme