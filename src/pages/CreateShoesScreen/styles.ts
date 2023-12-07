export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "center",
      xl: "end",
      lg: "stretch",
    },
    py: "3.5rem",
    px: {
      xs: "1.375rem",
      sm: "1.375rem",
      md: "1.375rem",
      xl: "6.25rem",
      lg: "6.25rem",
    },
  },
  header: {
    display: {
      xs: "block",
      sm: "block",
      md: "block",
      xl: "flex",
      lg: "flex",
    },
    justifyContent: "space-between",
  },
  searchContainer: {
    display: "flex",
  },
  input: {
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      xl: "80%",
      lg: "80%",
    },
    marginRight: {
      xs: 0,
      sm: 0,
      md: 0,
      xl: "1rem",
      lg: "1rem",
    },
    py: "0.75rem",
    px: "1rem",
  },
  createImage: {
    width: {
      xs: "90%",
      sm: "90%",
      md: "90%",
      xl: "50%",
      lg: "50%",
    },
  },
  buttonContainer: {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      xl: "flex",
      lg: "flex",
    },
    alignItems: "center",
  },
  mobileButton: {
    width: "100%",
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      xl: "none",
      lg: "none",
    },
  },
};
