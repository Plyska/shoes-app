export const styles = {
  title: {
    xs: "h2",
    sm: "h2",
    md: "h1",
    xl: "h1",
    lg: "h1",
  },
  container: {
    px: {
      xs: "1.375rem",
      sm: "1.375rem",
      md: "1.375rem",
      xl: "6.25rem",
      lg: "6.25rem",
    },
    py: "3rem",
    display: { xs: "block", sm: "block", md: "block", xl: "flex", lg: "flex" },
    justifyContent: "center",
    alignItems: "center",
  },
  heroImg: {
    height: { xs: "15rem", sm: "15rem", md: "20rem", xl: "40rem", lg: "40rem" },
  },
  imgContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  heroTextContainer: {
    paddingLeft: { xs: 0, sm: 0, md: 0, xl: "7rem", lg: "7rem" },
    marginTop: { xs: "2rem", sm: "2rem", md: "2rem", xl: 0, lg: 0 },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "center", md: "center", xl: "flex-start", lg: "flex-start" }
  },
  subText: {
    marginTop: "1.25rem",
  },
  heroButton: {
    py: "0.75rem",
  },
  buttonContainer: {
    width: { xs: "100%", sm: "100%", md: "50%", xl: "80%", lg: "80%" },
    marginTop: "3.5rem",
  },
};
