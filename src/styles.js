import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "calc(100vh - 40px)",
    paddingTop: "50px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 92px)",
    },
  },
  article: {
    flexGrow: 1,
    padding: "30px 15px 0 15px",
  },
}));

export default useStyles;
