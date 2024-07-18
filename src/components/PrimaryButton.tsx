export const PrimaryButton = {
  py: "24px",
  px: "24px",
  position: "relative",
  lineHeight: "24px",
  borderRadius: "100vw",
  overflow: "hidden",
  //isolation: "isolate",
  bgColor: "hsl(148, 90%, 40%)",
  color: "white",
  shadow: "0px 20px 50px hsl(148, 90%, 0%, 20%)",
  fontWeight: "600",
  _hover: {
    "&:before": {
      opacity: "1",
      animationPlayState: "running",
    },
    bgColor: "hsl(148, 90%, 40%)",
    shadow:
      "0px 20px 50px hsl(148, 90%, 0%, 20%), 0px 0px 20px hsl(108, 92%, 67%, 70%)",
  },
  _active: {
    bgColor: "hsl(108, 82%, 67%)",
  },
  _before: {
    content: '""',
    position: "absolute",
    h: "100%",
    w: "100%",
    zIndex: "-10",
    opacity: "0",
    bgGradient:
      "Linear(to-r, hsl(108, 72%, 57%,30%) 20%, hsl(108, 72%, 57%) 50%,  hsl(108, 72%, 57%,30%) 90%)",
    bgSize: "600% 100%",
    animation: "bgHorizontalMovement 2s infinite linear",
    transition: "opacity 300ms ease",
    animationPlayState: "paused",
  },
};
