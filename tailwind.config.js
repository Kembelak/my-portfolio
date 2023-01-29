/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue: '#2cbce9',
        red:'#dc4492',
        yellow: '#fdcc49',
        grey:'#757575',
        "light-blue":"#2196f3",
        "deep-blue":"#010026",
        "dark-grey":"#212121",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
      backgroundImage:(theme) => ({
        "gradient-rainbow":
        "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 75.07%)",
        "gradient-rainblue":
        "linear-gradient(90deg, #24cbff 14.53% , #fc59ff 69.36% , #ffbd0c 117.73%)",
      }),
      boxShadow: {
        btnShadow: "0px 0px 30px #2196f3,0px 0px 30px #2196f3,0px 0px 50px #2196f3",
        coverShadow: "0px 0px 5px #757575,0px 0px 20px #2196f3,0px 0px 30px #2196f3",
      },
      fontFamily:{
        playfair: ["Playfair Display","serif"],
        opensans:["Open Sans","sans-serif"]
      },
      content:{
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens: {
      xs:"480px",
      sm:"760px",
      md:"1060px"
    }
  },
  plugins: [],
}
