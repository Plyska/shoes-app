import { themeColors } from "../../theme/palette";

export const styles = {
  container: {
    
    p: "1.5rem",
    backgroundColor: themeColors.white,
    border: `1px solid ${themeColors.white}`,
    borderRadius: "0.75rem",
    cursor: "pointer",
    flex: "0 0 27%",
    boxShadow: "0px 3px 5px 0px rgba(6, 31, 106, 0.05);",
    "&:hover": {
      borderColor: themeColors.black,
    },
  },
  titleNButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  ratingContainer: {
    pt: "0.5rem"
  },
  bottomContentContainer: {
    display: "flex",
    pt: "1.5rem",
    justifyContent: "space-between"
  },
  dividerContainer: {
    borderLeft: `1px solid ${themeColors.light_gray}`,
    pl: "1rem"
  }
};
