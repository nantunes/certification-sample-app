import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  "@keyframes logoSpin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  logo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  "@media (prefers-reduced-motion: no-preference)": {
    logo: {
      animation: "$logoSpin infinite 20s linear",
    },
  },
});

export default useStyles;
