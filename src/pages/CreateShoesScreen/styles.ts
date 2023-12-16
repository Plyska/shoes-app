import { themeColors } from "../../theme/palette";

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
    paddingTop: "3.5rem",
    paddingBottom: "6rem",
    px: {
      xs: "1.375rem",
      sm: "1.375rem",
      md: "1.375rem",
      xl: "6.25rem",
      lg: "6.25rem",
    },
  },
  titleContainer: {
    mb: {
      xs: "1rem",
      sm: "1rem",
      md: "1rem",
      xl: 0,
      lg: 0,
    },
  },
  header: {
    width: "100%",
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
  },
  shoesImage: {
    width: {
      xs: "90%",
      sm: "90%",
      md: "90%",
      xl: "50%",
      lg: "25%",
    },
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
    minWidth: "15rem",
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      xl: "flex",
      lg: "flex",
    },
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mobileButtonContainer: {
    mt: "5rem",
    position: "fixed",
    width: "100%",
    bottom: 0,
    height: "4rem",
    backgroundColor: themeColors.white,
    borderTop: `1px solid ${themeColors.light_gray}`,
    paddingTop: "1rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1.375rem",
    paddingRight: "1.375rem",
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      xl: "none",
      lg: "none",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  mobileButton: {
    width: "85%",
    py: "0.75rem",
  },
  filtersContainer: {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      xl: "flex",
      lg: "flex",
    },
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filtersMobileContainer: {
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      xl: "none",
      lg: "none",
    },
  },
  cardContainer: {
    spacing: { xs: 1, sm: 2, md: 2, xl: "auto", lg: "auto" },
    direction: {
      xs: "column",
      sm: "column",
      md: "column",
      xl: "row",
      lg: "row",
    },
  },
};
