const userInfo = {
  "name": "Jagadish K.",
  "image": "//res.cloudinary.com/jagzlabs/image/upload/c_fill,dpr_auto,f_auto,g_face:auto,h_400,q_auto,r_max,w_400,x_0,y_0/v1512794075/jagz-in-cafeteria_wy7ho6.png",
  "designation": "UI Developer",
  "mobile": "+91 - 9916128366",
  "email": "k.jagdish@gmail.com",
  "github": "jagzviruz",
  "twitter": "jagzviruz",
  "blog": "jagzlabs.com",
  "linkedin": "in/kjagdish",
  "summary": "I am a fairly competent UI developer with a good knowledge of developing scalable backends. I have 10years of experience in the field and have worked on a variety of applications ranging from static websites to analytics dashboards to full-blown e-commerce applications. I like building prototype applications in Node.js. Over weekends, I enjoy participating in hackathons and multiplayer games.",
  "skills": [
    {
      "name": "Frontend Development",
      "value": 4
    },
    {
      "name": "Backend Development",
      "value": 4
    },

    {
      "name": "SQL",
      "value": 2
    },
    {
      "name": "NoSQL",
      "value": 3
    },
    {
      "name": "Design",
      "value": 2
    }
  ]
};

module.exports = {
  siteMetadata: {
    title: 'Jagadish, K. - UI Developer',
    user: userInfo
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jagadish K.",
        short_name: "JagadishK",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `alegreya\:400,500,700`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
